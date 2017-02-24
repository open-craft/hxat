require('./annotator.css');
require('../../http_static/vendors/development/css/summernote.css');
require('../../http_static/vendors/Annotator/plugins/summernote-richtext-annotator.css');
require('../../http_static/vendors/development/css/token-input.css');
require('./text_annotation.css');
require('./common.css');

jQuery(document).ready(function() {
    var element = document.createElement('div');
    element.id = 'viewer';
    jQuery('#container')[0].appendChild(element);
    var annotatorOptions = {
        showViewPermissionsCheckbox: false,
        readOnly: true,
    };
    window.annotation_tool = jQuery('#viewer').annotator(annotatorOptions).data('annotator');
    window.annotation_tool.addPlugin('HighlightTags', {
        'tag': jQuery('#tags').html()
    });
    window.annotation_tool.addPlugin('SummernoteRichText', {});

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
    window.annotations_saved = [];

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

    var url = jQuery('#text_url').html().trim();
    jQuery.ajax({
        url: url,
        method: 'GET',
        async: true,
        contentType: 'text/plain',
        dataType: 'text/plain',
        complete: function(data) {
            if (data.status === 200) {
                if (jQuery('.annotator-wrapper') !== undefined) {
                    jQuery('.annotator-wrapper').prepend(data.responseText);
                } else {
                    jQuery('#viewer').prepend(data.responseText);
                }
            } else {
                var element = document.createElement('div');
                element.innerHTML = "Sorry, no text was found";
            }
            jQuery('#container').show();
            jQuery('.sidebar').show();
            jQuery('#hxat_lite_loading').hide();
            // window.checkMultiplePages();
        }
    }); 

    var annotations_url = jQuery('#annotations-url').html();
    var options = {
        url: annotations_url,
        success: function(data) {
            window.annotation_tool.addPlugin('LocalStore', {
                annotations: data.rows
            });
            window.annotations_saved = data.rows;
            jQuery(document).trigger('annotation_core_init');
        },
        async: true
    };
    jQuery.ajax(options);
});
