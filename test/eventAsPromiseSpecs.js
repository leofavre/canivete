import eventAsPromise from "../dist/eventAsPromise.js";

describe("eventAsPromise", function() {
	let imageSrc = "data:image/jpeg;base64,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";

	it(`Should fulfill when the event is triggered for the first time.`, function(done) {
		let timerCallback = jasmine.createSpy("timerCallback");

		let checkbox = document.createElement("input");
		checkbox.type = "checkbox";

		eventAsPromise(checkbox, "change")
			.then(timerCallback)
			.then(() => expect(timerCallback).toHaveBeenCalled())
			.then(done);

		expect(timerCallback).not.toHaveBeenCalled();

		let event = document.createEvent("HTMLEvents");
		event.initEvent("change", false, true);
		checkbox.dispatchEvent(event);
	});

	it(`Should fulfill when the event is triggered for the first time.`, function(done) {
		let image = document.createElement("img");

		eventAsPromise(image, "load", image => image.complete)
			.then(image => expect(image.src).toBe(imageSrc))
			.then(done);

		image.src = imageSrc;
	});

	it(`Should fulfill when the verification function returns true.`, function(done) {
		let image = document.createElement("img");
		image.src = imageSrc;

		setTimeout(function() {
			eventAsPromise(image, "load", image => image.complete)
				.then(image => expect(image.src).toBe(imageSrc))
				.then(done);
		}, 100);
	});

	it(`Should throw an error when the first parameter is not a DOM element, document or window.`, function() {
		expect(() => eventAsPromise("laser", "myEvent")).toThrow();
		expect(() => eventAsPromise(0, "myEvent")).toThrow();
		expect(() => eventAsPromise(document.createTextNode("laser"), "myEvent")).toThrow();
		expect(() => eventAsPromise(document.querySelectorAll("div"), "myEvent")).toThrow();
	});

	it(`Should not throw an error when the first parameter is a DOM element, document or window.`, function() {
		let checkbox = document.createElement("input");

		expect(() => eventAsPromise(window, "myEvent")).not.toThrow();
		expect(() => eventAsPromise(document, "myEvent")).not.toThrow();
		expect(() => eventAsPromise(checkbox, "myEvent")).not.toThrow();
	});
});
