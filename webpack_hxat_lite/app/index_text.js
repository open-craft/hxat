// pull all css files necessary for this to work
require('./annotator.css');
require('../../http_static/vendors/development/css/summernote.css');
require('../../http_static/vendors/Annotator/plugins/summernote-richtext-annotator.css');
require('../../http_static/vendors/development/css/token-input.css');
require('./text_annotation.css');
require('./common.css');

// wait until page has loaded
jQuery(document).ready(function() {

    // create a holder for the text within the given element
    var element = document.createElement('div');
    element.id = 'viewer';
    jQuery('#container')[0].appendChild(element);
    
    // set up the options for annotator to make things read-only
    var annotatorOptions = {
        showViewPermissionsCheckbox: false,
        readOnly: true,
    };

    // set up the annotator area, though it is currently empty
    window.annotation_tool = jQuery('#viewer').annotator(annotatorOptions).data('annotator');
    
    // set up the highlight tags to allow for different colored tags
    window.annotation_tool.addPlugin('HighlightTags', {
        'tag': jQuery('#tags').html()
    });

    // set up Summernote to allow for rich text annotations (i.e. accept html)
    window.annotation_tool.addPlugin('SummernoteRichText', {});

    // though currently unused, this will allow future versions to check if the text input should be broken up into multiple "pages"
    window.checkMultiplePages = function() {
        if (jQuery('#viewer .hx-page').length > 1) {
            window.current_page = 0;
            window.hx_annotation_pages = [];
            jQuery.each(jQuery('#viewer .hx-page'), function(index, value) {
                window.hx_annotation_pages.push(jQuery(value).html());
                jQuery(value).children().unwrap();
            });

            window.changePage(window.current_page);
        }
    };

    // set a global space for annotations
    window.annotations_saved = [];

    // though currently unsed, this should switch out pages
    window.changePage = function(page) {
        jQuery.each(jQuery('.annotator-wrapper').children(), function(index, element) {
            if (!jQuery(element).hasClass('annotator-outer') || !jQuery(element).hasClass('annotator-adder')) {
                jQuery(element).remove();
            }
        });

        jQuery('.annotator-wrapper').prepend(window.hx_annotation_pages[page]);
        window.annotations_saved.forEach(function(ann){
            var child, h, _i, _len, _ref;
            if (ann.highlights !== undefined) {
                _ref = ann.highlights;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    h = _ref[_i];
                    if (!(h.parentNode !== undefined)) {
                        continue;
                    }
                    child = h.childNodes[0];
                    jQuery(h).replaceWith(h.childNodes);
                }
            }
            window.annotation_tool.plugins.LocalStore.unregisterAnnotation(ann);
        });
        jQuery.each(window.annotations_saved, function (index, annotation) {
            window.annotation_tool.setupAnnotation(annotation);
            window.annotation_tool.plugins.LocalStore.registerAnnotation(annotation);
        });

        jQuery('.hxat-text-lite-nav').remove();
        if (page !== 0) {
            jQuery('.annotator-wrapper').after('<a class="hxat-text-lite-nav" href="#" onclick="window.changePage('+(page-1).toString()+');">Previous Page</a>');
        }
        if (page !== window.hx_annotation_pages.length - 1) {
            jQuery('.annotator-wrapper').after('<a class="hxat-text-lite-nav" href="#" onclick="window.changePage('+(page+1).toString()+');">Continue Reading</a>');
        }

        window.current_page = page;
    };

    // get the url to collect the text to be annotated
    var url = jQuery('#text_url').html().trim();

    // make a query to retrieve text
    jQuery.ajax({
        url: url,
        method: 'GET',
        async: true,
        contentType: 'text/plain',
        dataType: 'text/plain',
        complete: function(data) {

            // add the data to the container depending if annotator has
            // already been instantiated
            if (data.status === 200) {
                if (jQuery('.annotator-wrapper') !== undefined) {
                    jQuery('.annotator-wrapper').prepend(data.responseText);
                } else {
                    jQuery('#viewer').prepend(data.responseText);
                }
                window.logThisForMe('hxat_data_retrieved', {'object': url});
            } else {
                var element = document.createElement('div');
                element.innerHTML = "Sorry, no text was found";
            }

            // show everything once the tool has loaded
            jQuery('#container').show();
            jQuery('.sidebar').show();
            jQuery('#hxat_lite_loading').hide();

            // window.checkMultiplePages();
        }
    }); 

    // get the annotations from a json file
    var annotations_url = jQuery('#annotations-url').html();
    var options = {
        url: annotations_url,
        success: function(data) {

            // store them in the "LocalStore" plugin for annotator
            window.annotation_tool.addPlugin('LocalStore', {
                annotations: data.rows
            });
            window.annotations_saved = data.rows;

            //trigger the event that tells the rest of the tool that the annotations have loaded
            jQuery(document).trigger('annotation_core_init');

            window.logThisForMe('hxat_data_retrieved', {'object': annotations_url});
        },
        async: true
    };
    jQuery.ajax(options);

    // logs whenever the user hovers over a highlight to view the annotation
    jQuery('body').on('mouseover', '.annotator-hl', function(){
        window.logThisForMe('hxat_annotation_viewed', {'annotation_id': jQuery(this).data('annotation-id')});
    });

});
