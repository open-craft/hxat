beforeEach(function() {
	window.testOptions = {
		commonInfo: {
			context_id: "test_context",
			collection_id: "text_collection",
			object_id: "test_object",
			token: "test_token",
			username: "testLuis",
			user_id: "fakeTestLuis",
			is_instructor: "True",
			pagination: 50,
			mediaType: "text",
		}
	}
})
describe("AController Tests", function() {
	it('creating empty controller', function () {
		AController(window.testOptions);
	    expect(window.AController.main).not.toBeUndefined();
	    expect(window.AController.targetObjectController).toBeUndefined();
	});
})