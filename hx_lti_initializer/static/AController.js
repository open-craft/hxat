/* AController.js
 *
 * This initializes the main Annotation Controller and all its parts on the page.
 * It calls upon the 4 parts of the tool:
 *     1) Target Object - to be annotated
 *     2) Annotation Core Library - doing the annotating
 *     3) Annotation Server - storing the annotation
 *     4) Dashboard Object - displays annotations
 */

window.AController = window.AController || function(options) {
	if (typeof options.targetObjectOptions !== "undefined") {
		AController.targetObjectController = new AController.TargetObjectController(options.targetObjectOptions, options.commonInfo);
	}
	//AController.annotationServer = new AController.AnnotationServer(options.annotationServerOptions);
	if (typeof options.annotationCoreOptions !== "undefined") {
		AController.annotationCore = new AController.AnnotationCore(options.annotationCoreOptions, options.commonInfo);
	}
	if (typeof options.dashboardControllerOptions !== "undefined") {
		AController.dashboardView = AController.DashboardView;
		AController.dashboardObjectController = new AController.DashboardController(options.dashboardControllerOptions, options.commonInfo, AController.dashboardView);
	}

	if (AController.Websocket !== undefined) {
		AController.websocket = new AController.Websocket({
			'failure_backup': function(){console.log("TODO: No failure_backup written.")},
			'websocket_url': window.location.host,
			'anon_id': jQuery('#user-id').html().trim(),
			'fallback_url': '',
			'fallback': function(){console.log("TODO: No fallback written.")},
			'decode_message': function(message){
				if (message.type == 'annotation_created') {
					var annotation = JSON.parse(message.annotation);
					AController.dashboardObjectController.endpoint.addNewAnnotationToMasterList(annotation);
					AController.dashboardObjectController.viewer.addCreatedAnnotation(annotation.media, annotation);
					AController.dashboardObjectController.endpoint.loadMoreAnnotations([annotation]);
				}
			},
			'unique_key': jQuery('#unique_key').html().trim()
		});
	}
	AController.main = new AController.AnnotationMain(options);
}