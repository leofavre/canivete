import eventAsPromise from "../dist/eventAsPromise";

describe("eventAsPromise", function() {
	let imageSrc = "https://www.w3.org/Icons/w3c_home";

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
		}, 1000);
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
