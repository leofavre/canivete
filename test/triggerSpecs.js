import trigger from "../dist/trigger";

describe("trigger", function() {
	it(`Should trigger a custom event, captured by the emmiter itself.`, function(done) {
		let eventCallback = jasmine.createSpy("eventCallback"),
			popupLayer = document.createElement("div");

		document.body.appendChild(popupLayer);

		popupLayer.addEventListener("open", evt => {
			eventCallback();
			expect(eventCallback).toHaveBeenCalled();
			done();
		});

		trigger(popupLayer, "open", false);
	});

	it(`Should trigger a custom event, captured by window because the event bubbles.`, function(done) {
		let eventCallback = jasmine.createSpy("eventCallback"),
			popupLayer = document.createElement("div");

		document.body.appendChild(popupLayer);

		window.addEventListener("open", evt => {
			eventCallback();
			expect(eventCallback).toHaveBeenCalled();
			done();
		});

		trigger(popupLayer, "open", true); // bubbles
	});

	it(`Should trigger a custom event, not captured by window because the event does not bubble.`, function(done) {
		let eventCallback = jasmine.createSpy("eventCallback"),
			popupLayer = document.createElement("div");

		document.body.appendChild(popupLayer);

		window.addEventListener("open", evt => {
			eventCallback();
		});

		trigger(popupLayer, "open", false); // does not bubble

		setTimeout(() => {
			expect(eventCallback).not.toHaveBeenCalled();
			done();
		}, 100);
	});

	it(`Should be able to access event details.`, function(done) {
		let popupLayer = document.createElement("div");

		document.body.appendChild(popupLayer);

		popupLayer.addEventListener("open", evt => {
			expect(evt.detail).toBe("customDetail");
			done();
		});

		trigger(popupLayer, "open", false, false, "customDetail");
	});
});
