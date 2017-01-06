jQuery(document).ready(function() {

    // This will change the sizes of the sidebar and Mirador instances depending on whether the sidebar is present.
    jQuery('.sidebar').click(function() {
        if (jQuery(this).hasClass('open')) {
            jQuery(this).removeClass('open');
            jQuery('#viewer').css('width', '100%');
            jQuery('.sidebar').html("Show Annotation List");
            jQuery('.annotationSection').hide();
        } else {
            jQuery(this).addClass('open');
            jQuery('#viewer').css('width', 'calc(100% - 310px)');
            jQuery('.sidebar').html("Hide Annotation List");
            jQuery('.annotationSection').show();
        }

        // needed to handle events in both IE and literally everything else.
        // this calls the "resize" event forcing Mirador to redraw everything to the new sizes
        var evt;
        try {
            evt = new Event('resize');
        } catch(e) {
            evt = window.document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
        }
        window.dispatchEvent(evt);
    });

    window.onkeyup = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if (key == 27) {
            if (jQuery('.xblock').hasClass('vjs-fullscreen')) {
                jQuery('.xblock').removeClass('vjs-fullscreen');
                console.log("Hit Esc");
            }
            jQuery('.annotationSection.side').css('height', '');
        }
    };
    if (document.addEventListener)
    {
        document.addEventListener('webkitfullscreenchange', exitHandler, false);
        document.addEventListener('mozfullscreenchange', exitHandler, false);
        document.addEventListener('fullscreenchange', exitHandler, false);
        document.addEventListener('MSFullscreenChange', exitHandler, false);
    }

    function exitHandler()
    {
        if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null)
        {
            /* Run code on exit */
            console.log("Exit handler");
            jQuery('.annotationSection.side').css('height', '');
            var exiter = function() {
                if (jQuery('.xblock').hasClass('vjs-fullscreen')) {
                    console.log("Removing fullscreen class");
                    jQuery('.xblock').removeClass('vjs-fullscreen');
                    setTimeout(exiter, 100);
                } 
            }
            exiter();
        }
    };

    window.annotation_tool.subscribe("annotationsLoaded", function(annotations) {
        if (annotations.length > 0) {
            window.updateDashboard(annotations);
        };
    });
    
    window.annotation_tool.subscribe('annotationHidden', function(annotationId) {
        jQuery('.annotationItem.item-' + annotationId).hide();
    });
    window.annotation_tool.subscribe('annotationShown', function(annotationId) {
        jQuery('.annotationItem.item-' + annotationId).show();
    });

    window.updateDashboard = function(annotations) {
      jQuery('.annotationsHolder').html("");
      jQuery.each(annotations, function(index, value){
            var html = '';
            if (value.media === "video") {
                html = "<div class='annotationItem item-"+value.id+"' role='listitem' aria-label='Annotation #"+index+"'><div class='playMediaButton'><span class='fa fa-youtube-play'></span> Play Clip</div><div class='body field' aria-label='Comment within group'>"+value.text+"</div><div class='tagList field side'>";
            } else if (value.media === "text") {
                html = "<div class='annotationItem item-"+value.id+"' role='listitem' aria-label='Annotation #"+index+"'><div class='quote'>"+value.quote+"</div><div class='body field' aria-label='Comment within group'>"+value.text+"</div><div class='tagList field side'>";
            }
            
            jQuery.each(value.tags, function(ind, tag){
                if (tag !== undefined && tag !== '') {
                    html+= "<div class='tag side'>" + tag.replace(/_/g, ' ') + "</div>";
                }
            });
            html += "</div></div>";
            jQuery('.annotationsHolder').append(html);
            if (value.media === "video") {
                jQuery('.annotationItem.item-'+index+' .playMediaButton ').click ( function(e) {
                    var player = window.vid;
                    player.annotator = window.annotation_tool;
                    //player.annotations.showAnnotation(annotation);
                    var playFunction = function() {
                        // Fix problem with youtube videos in the first play. The plugin don't have this trigger
                        if (player.techName === 'Youtube') {
                            var startAPI = function() {
                                player.annotations.showAnnotation(value);
                            }
                            if (player.annotations.loaded)
                                startAPI();
                            else
                                player.one('loadedRangeSlider', startAPI); // show Annotations once the RangeSlider is loaded
                        } else {
                            player.annotations.showAnnotation(value);
                        }
                    };
                    if (player.paused()) {
                        player.play();
                        player.one('playing', playFunction);
                    } else {
                        playFunction();
                    }
                });
            } else if (value.media == 'text') {
                jQuery('.annotationItem.item-'+index+' .quote ').click(function() {
                    jQuery('html, body').animate({
                        scrollTop: jQuery('.annotator-hl[@data-annotation-id="' + value.id + '"').offset().top
                    }, 500);
                });
            }
            jQuery('.annotationItem.item-'+index+' .tagList .tag').click ( function(e) {
                if (!window.isFiltered) {
                    var tag = jQuery(this).html();
                    jQuery.each(window.annotation_tool.plugins.LocalStore.annotations, function(index, annotation) {
                        if (annotation.tags.indexOf(tag.replace(/ /g,'_')) == -1) {
                            jQuery('.item-'+annotation.id).css({'float': 'right', 'margin-left': '-99999px', 'margin-right': '-999999px'});
                        } else {
                            //jQuery('.item-'+annotation.id).show();
                        }
                    });
                    jQuery('.annotationsHolder').prepend('<div class="filter-message">Showing only annotations with tag "'+tag+'". Click here to show all annotations.</div>');
                    jQuery('.filter-message').click(function(e) {
                        jQuery.each(window.annotation_tool.plugins.LocalStore.annotations, function(index, annotation) {
                            jQuery('.item-'+annotation.id).css({"float": "none", "margin-left": "0px", "margin-right": "0px"});
                        });
                        window.isFiltered = false;
                        jQuery('.filter-message').remove();
                    });
                    jQuery('.annotationSection').animate({scrollTop:0});
                    window.isFiltered = true;
                }
            });
          });
    };
});