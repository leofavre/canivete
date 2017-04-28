import trigger from "../dist/trigger";

describe("trigger", function() {
	let imageSrc = "https://www.w3.org/Icons/w3c_home";

	it(`Should fulfill when the event is triggered for the first time.`, function(done) {
		let timerCallback = jasmine.createSpy("timerCallback");

		let checkbox = document.createElement("input");
		checkbox.type = "checkbox";

		trigger(checkbox, "change")
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

		trigger(image, "load", image => image.complete)
			.then(image => expect(image.src).toBe(imageSrc))
			.then(done);

		image.src = imageSrc;
	});

	it(`Should fulfill when the verification function returns true.`, function(done) {
		let image = document.createElement("img");
		image.src = imageSrc;

		setTimeout(function() {
			trigger(image, "load", image => image.complete)
				.then(image => expect(image.src).toBe(imageSrc))
				.then(done);
		}, 500);
	});
});
