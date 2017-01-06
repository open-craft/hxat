require('./image_for_hxatlite.css');
window.jQuery(document).ready(function() {
    var element = document.createElement('div');
    element.id = "viewer";
    jQuery('#container')[0].appendChild(element);
    
    var manifest_url = jQuery('#image_url').html();
    var views = ['Imageview'];
    var default_view = 'ImageView';
    if (jQuery('#allow_thumbnails_view').html().indexOf('true') !== -1) {
        views.push('ThumbnailsView');
    }
    if (jQuery('#allow_scroll_view').html().indexOf('true') !== -1) {
        views.push('ScrollView');
    }
    if (jQuery('#default_thumbnails_view').html().indexOf('true') !== -1) {
        default_view = 'ThumbnailsView';
    }
    if (jQuery('#default_scroll_view').html().indexOf('true') !== -1) {
        default_view = 'ScrollView';
    }

    Mirador({
        "id": "viewer",
        "layout": "1x1",
        "data": [
            { "manifestUri": manifest_url, "location": "Harvard University"},
        ],
        'buildPath': 'https://hxat.harvardx.harvard.edu/static/vendors/mirador/',
        "windowObjects": [{
            "viewType": default_view,
            "loadedManifest": manifest_url,
            "displayLayout": false,
            "sidePanel": false,
            "bottomPanel": false,
            "annotationState": "annoOnCreateOff",
            "availableViews" :  views,
        }],
        "saveSession": false,
        "mainMenuSettings": {'show': false},
    });
});