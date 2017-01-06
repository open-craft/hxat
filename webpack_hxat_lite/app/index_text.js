require('./annotator.css');
require('../../http_static/vendors/development/css/summernote.css');
require('../../http_static/vendors/Annotator/plugins/summernote-richtext-annotator.css');
require('../../http_static/vendors/development/css/token-input.css');
require('./text_annotation.css');

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
		}
	});	

	var annotations_url = jQuery('#annotations-url').html();
    var options = {
        url: annotations_url,
        success: function(data) {
        	console.log(data.rows);
            window.annotation_tool.addPlugin('LocalStore', {
                annotations: data.rows
            });
            jQuery(document).trigger('annotation_core_init');
        },
        async: true
    };
    jQuery.ajax(options);
});
