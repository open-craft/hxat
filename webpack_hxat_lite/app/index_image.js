require('./image_for_hxatlite.css');
require('./common.css');
window.jQuery(document).ready(function() {
    var element = document.createElement('div');
    element.id = "viewer";
    element.style = "height:600px; width:100%";
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

    jQuery.subscribe('windowAdded', function (event, windowId, slotAddress) {
        jQuery.subscribe('annotationListLoaded.' + Mirador.viewer.workspace.slots[0].window.id, function() {
            var mirAnnotations = Mirador.viewer.workspace.slots[0].window.annotationsList;
            var endpoint = new Mirador.CatchEndpoint();
            endpoint.parent = Mirador.viewer.workspace.slots[0].window;
            var annotatorAnnotations = jQuery.map(mirAnnotations, function(oaAnnotation) {return endpoint.getAnnotationInEndpoint(oaAnnotation)});
            if (annotatorAnnotations.length > 0) {
                window.updateDashboard(annotatorAnnotations);
            }
        });
    });

    var mira = window.mir = Mirador({
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
        // "annotationEndpoint": 
        //     {
        //     "name":"Harvard CATCH Production",
        //     "module": "CatchEndpoint",
        //     "options": {
        //       token: "",
        //       // The endpoint of the store on your server.
        //       prefix: "annotation_api",
        //       userid : "",
        //       username : "",
        //       roles : "",
        //       collection_id : "",
        //       context_id : "",
        //     }
        // }
    });
    jQuery('#hxat_lite_loading').hide();
    jQuery('#viewer').css('position', 'absolute');
    jQuery('#container').show();
    jQuery('.sidebar').show();
    
    if (typeof(mira) === "undefined") {
        jQuery.publish('resizeMirador');

        setTimeout(function(){
            jQuery.ajax({ 
                url: 'https://edge.edx.org/asset-v1:HarvardX+HxAT101+2015_T4+type@asset+block@cellx-euk-annotation-list.json', 
                success: function(data){
                    delayed = function() {
                        if (Mirador.viewer.workspace.slots[0].window !== null) {
                            Mirador.viewer.workspace.slots[0].window.annotationsList = jQuery.map(data.resources, function(val) {
                                val.endpoint = "manifest"
                                return val;
                            });
                            jQuery.publish('annotationListLoaded.'+Mirador.viewer.workspace.slots[0].window.id);
                        } else {
                            setTimeout(delayed, 200);
                        }
                    }
                    delayed();
                }
            });
        }, 1000);
    } else {
        mira.eventEmitter('resizeMirador');
    }
});