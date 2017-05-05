import listen from "../dist/listen";
import trigger from "../dist/trigger";

describe("listen", function() {
	it("Should allow document as parameter.", function() {
		let eventCallback = jasmine.createSpy("eventCallback");
		expect(() => listen(document, "open", eventCallback)).not.toThrow();
	});

	it("Should allow window as parameter.", function() {
		let eventCallback = jasmine.createSpy("eventCallback");
		expect(() => listen(window, "open", eventCallback)).not.toThrow();
	});

	it("Should allow many dom elements, including document and window, as parameter.", function() {
		let eventCallback = jasmine.createSpy("eventCallback"),
			singleDiv = document.createElement("div");

		expect(() => listen([singleDiv, document, window], "open", eventCallback)).not.toThrow();
	});

	it("Should listen for a single event of a single DOM element.", function(done) {
		let eventCallback = jasmine.createSpy("eventCallback"),
			singleDiv = document.createElement("div");

		document.body.appendChild(singleDiv);

		listen(singleDiv, "open", eventCallback);

		trigger(singleDiv, "open", false);

		setTimeout(() => {
			expect(eventCallback.calls.count()).toBe(1);
			done();
		}, 20);
	});

	it("Should listen for multiple events of a single DOM element.", function(done) {
		let eventCallback = jasmine.createSpy("eventCallback"),
			singleDiv = document.createElement("div");

		document.body.appendChild(singleDiv);

		listen(singleDiv, "one two three", eventCallback);

		trigger(singleDiv, "one", false);
		trigger(singleDiv, "two", false);
		trigger(singleDiv, "three", false);

		setTimeout(() => {
			expect(eventCallback.calls.count()).toBe(3);
			done();
		}, 20);
	});

	it("Should listen for multiple events of multiple DOM elements.", function(done) {
		let eventCallback = jasmine.createSpy("eventCallback"),
			multipleDivs = [document.createElement("div"), document.createElement("div")];

		document.body.appendChild(multipleDivs[0]);
		document.body.appendChild(multipleDivs[1]);

		listen(multipleDivs, "one two three", eventCallback);

		trigger(multipleDivs[0], "one", false);
		trigger(multipleDivs[0], "two", false);
		trigger(multipleDivs[0], "three", false);
		trigger(multipleDivs[1], "one", false);
		trigger(multipleDivs[1], "two", false);
		trigger(multipleDivs[1], "three", false);

		setTimeout(() => {
			expect(eventCallback.calls.count()).toBe(6);
			done();
		}, 20);
	});
});
