require('./video-js.min.css');
require('./annotator.css');
require('./common.css');
require('../../http_static/vendors/development/css/ova.css');
require('../../http_static/vendors/development/css/rangeslider.css');
require('../../http_static/vendors/development/css/summernote.css');
require('../../http_static/vendors/Annotator/plugins/summernote-richtext-annotator.css');
require('../../http_static/vendors/development/css/videojs-transcript.css');
require('./video_annotation.css');
require('../../http_static/vendors/development/css/token-input.css');

window.jQuery(document).ready(function() {

    // get the options from the HTML template
    var video_url = jQuery('#video-url').html();
    var backup_video_url = jQuery('#backup-video-url').html();
    var transcript_url = jQuery('#transcript').html();

    // function needed to determine the extension name for videojs
    var getSource = function(url_given) {
        if (url_given.indexOf('youtu') !== -1) {
            return "video/youtube";
        } else {
            return "video/mp4";
        }
    };

    // set up container for the video player with the various "sources" and transcripts
    var element = document.createElement('div');
    element.innerHTML = '<video id="vid1" class="video-js vjs-default-skin" controls="controls" preload="none" width="auto" height="698"><source src="'+ backup_video_url +'" type="'+getSource(backup_video_url)+'" /><source src="'+ video_url +'" type="'+getSource(video_url)+'" /> <track kind="captions" src="'+ transcript_url +'" srclang="en" label="English" default /></video>';
    element.id = "viewer";

    // sets up the player container and transcript container
    jQuery('#container')[0].appendChild(element);
    jQuery('#transcript').html("");

    // configures some information on the container and instantiates the player
    var vidElement = jQuery('#viewer').find('video')[0];
    if (typeof videojs !== undefined) {
        window.vid = videojs(vidElement, {
            techOrder: ['youtube', 'html5', 'flash'],
            playbackRates:[0.5, 1, 1.5, 2],
            downloadItems: [],
        }, {});
    }

    // sets up the annotation tool
    var annotatorOptions = {
        showViewPermissionsCheckbox: false,
        readOnly: true,
    };
    window.annotation_tool = jQuery('#viewer').annotator(annotatorOptions).data('annotator');
    window.annotation_tool.addPlugin('Permissions', {
        userString: function (user) {
            return '';
        },
        userId: function (user) {
            return '';
        },
        userAuthorize: function(action, annotation, user) {
            if (action === 'read') {
                return true;
            }
            return false;
          }
    });
    
    window.annotation_tool.addPlugin('VideoJS', {});
    window.annotation_tool.addPlugin('HighlightTags', {
        'tag': jQuery('#tags').html()
    });
    window.annotation_tool.addPlugin('TimeRangeEditor', {});
    window.annotation_tool.addPlugin('SummernoteRichText', {});

    var self = window;

    // gets the annotations from json
    var annotations_url = jQuery('#annotations-url').html();
    var options = {
        url: annotations_url,
        success: function(data) {

            //sets up annotations via "LocalStore" plugin
            window.annotation_tool.addPlugin('LocalStore', {
                annotations: data.rows
            });

            //trigger the event that tells the rest of the tool that the annotations have loaded
            jQuery(document).trigger('annotation_core_init');

            window.logThisForMe('hxat_data_retrieved', {'object': annotations_url});
        },
        async: true
    }
    jQuery.ajax(options);

    // sets up transcript for the video if available
    var transcript_options = {
        showTitle: false,
        showTrackSelector: false,
    };
    window.parse = function(val) {
        var result = "Not found",
            tmp = [];
        window.location.search
        //.replace ( "?", "" ) 
        // this is better, there might be a question mark inside
        .substr(1)
            .split("&")
            .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
        });
        return result;
    };

    // function to play a specific annotation when the user clicks on the button
    window.play_annotation = function(ann_id){
        var found = undefined;
        jQuery.each(window.annotation_tool.plugins.LocalStore.annotations, function(index, value){ 
            if(value.id == parseInt(ann_id, 10)){
                found = value;
            }
        });
        if (found !== undefined) {
            var player = window.vid;
            player.annotator = window.annotation_tool;

            window.logThisForMe('hxat_lite_start_on_videoclip', {'annotation_id': ann_id});

            //player.annotations.showAnnotation(annotation);
            var playFunction = function() {
                // Fix problem with youtube videos in the first play. The plugin don't have this trigger
                if (player.techName === 'Youtube') {
                    var startAPI = function() {
                        player.annotations.showAnnotation(found);
                    }
                    if (player.annotations.loaded)
                        startAPI();
                    else
                        player.one('loadedRangeSlider', startAPI); // show Annotations once the RangeSlider is loaded
                } else {
                    player.annotations.showAnnotation(found);
                }
            };
            if (player.paused()) {
                player.play();
                player.one('playing', playFunction);
            } else {
                playFunction();
            }
        }
    };

    window.isFiltered = false;
    window.transcript = self.vid.transcript(transcript_options);
    document.querySelector('#transcript').appendChild(window.transcript.el());
    
    // once all the annotations have been downloaded from the json file
    jQuery(document).bind('annotation_core_init', function() {

        // sets up rangeslider and annotations
        self.vid.rangeslider(jQuery.extend(true, {}, {}));
        self.vid.annotations(jQuery.extend(true, {}, {posBigNew: "none"}));

        // sets up the rangesliders to their appropriate start and end locations
        jQuery(self.vid.annotations.rsdl.el()).watch('left', function(data, i){
            jQuery('#startTimeFilter').val(self.vid.annotations.rsdbl.el_.firstChild.innerHTML);
        });
        jQuery(self.vid.annotations.rsdr.el()).watch('left', function(data, i){
            jQuery('#endTimeFilter').val(self.vid.annotations.rsdbr.el_.firstChild.innerHTML);
        });

        // once all this has been set up, show the tool
        setTimeout(function() {
            jQuery('#hxat_lite_loading').hide();
            jQuery('#container').show();
            jQuery('.sidebar').show();
            if (window.location.search !== "") {
                var ann_id = window.parse('videoAn');
                if (ann_id !== undefined) {
                    window.play_annotation(ann_id);
                }
            }
        }, 500);
    });

    // look for any extra optons to customize the instance
    window.extra_options = {}
    jQuery.each(jQuery('#extra_options').children(), function(index, value) {
        window.extra_options[value.className] = value.innerHTML;
    });

    // the transcript should be hidden unless otherwise stated
    if (window.extra_options.transcript_on_load == "true") {
        jQuery("#transcript").show();
    }

    // if the transcript button is clicked, then container with the transcript is toggled
    jQuery('.vjs-transcript-control.vjs-control').click(function(){
        setTimeout(function(){
            var state = 'open';
            if (jQuery('#transcript').is(':visible')) {
                jQuery('#container').addClass('transcript');
            } else {
                jQuery('#container').removeClass('transcript');
                state = 'close';
            }
            var evt;
            try {
                evt = new Event('resize');
            } catch(e) {
                evt = window.document.createEvent('UIEvents');
                evt.initUIEvent('resize', true, false, window, 0);
            }
            window.dispatchEvent(evt);

            window.logThisForMe('hxat_lite_transcript_toggled', {'state': state});
        }, 250);
    });
    
    jQuery('.vjs-showannotations-annotation.vjs-control').click(function() {
        window.logThisForMe('hxat_lite_video_toggle_annotations', {});
    });

    jQuery('.vjs-play-control.vjs-control').click(function() {
        window.logThisForMe('hxat_lite_video_pause', {});
    });

    jQuery('.vjs-fullscreen-control.vjs-control').click(function() {
        window.logThisForMe('hxat_lite_fullscreen', {});
    });

    jQuery('body').on('click', '.playMediaButton', function() {
        window.logThisForMe('hxat_lite_videoclip_button_clicked', {'annotation': jQuery(this).parent().attr('class')});
    });

    jQuery('body').on('click', '.tag.side', function() {
        window.logThisForMe('hxat_lite_tag_clicked', {'tag': jQuery(this).html()});
    });

    // logs whenever the user hovers over a highlight to view the annotation
    jQuery('body').on('mouseover', '.annotator-hl', function(){
        window.logThisForMe('hxat_annotation_viewed', {'annotation_id': jQuery(this).find('.annotation').attr('id')});
    });

    jQuery('body').on('mousedown', '.annotator-hl', function(){
        window.logThisForMe('hxat_lite_video_annotation_clicked', {'annotation_id': jQuery(this).find('.annotation').attr('id')});
    });
});