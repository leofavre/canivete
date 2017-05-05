import ignore from "../dist/ignore";
import listen from "../dist/listen";
import trigger from "../dist/trigger";

describe("ignore", function() {
	it("Should allow document as parameter.", function() {
		let eventCallback = jasmine.createSpy("eventCallback");
		expect(() => ignore(document, "open", eventCallback)).not.toThrow();
	});

	it("Should allow window as parameter.", function() {
		let eventCallback = jasmine.createSpy("eventCallback");
		expect(() => ignore(window, "open", eventCallback)).not.toThrow();
	});

	it("Should allow many dom elements, including document and window, as parameter.", function() {
		let eventCallback = jasmine.createSpy("eventCallback"),
			singleDiv = document.createElement("div");

		expect(() => ignore([singleDiv, document, window], "open", eventCallback)).not.toThrow();
	});

	it("Should ignore a single event of a single DOM element.", function(done) {
		let eventCallback = jasmine.createSpy("eventCallback"),
			singleDiv = document.createElement("div");

		document.body.appendChild(singleDiv);

		listen(singleDiv, "open", eventCallback);
		ignore(singleDiv, "open", eventCallback);

		trigger(singleDiv, "open", false);

		setTimeout(() => {
			expect(eventCallback).not.toHaveBeenCalled();
			done();
		}, 20);
	});

	it("Should ignore multiple events of a single DOM element.", function(done) {
		let eventCallback = jasmine.createSpy("eventCallback"),
			singleDiv = document.createElement("div");

		document.body.appendChild(singleDiv);

		listen(singleDiv, "one two three", eventCallback);
		ignore(singleDiv, "one two three", eventCallback);

		trigger(singleDiv, "one", false);
		trigger(singleDiv, "two", false);
		trigger(singleDiv, "three", false);

		setTimeout(() => {
			expect(eventCallback).not.toHaveBeenCalled();
			done();
		}, 20);
	});

	it("Should ignore multiple events of multiple DOM elements.", function(done) {
		let eventCallback = jasmine.createSpy("eventCallback"),
			multipleDivs = [document.createElement("div"), document.createElement("div")];

		document.body.appendChild(multipleDivs[0]);
		document.body.appendChild(multipleDivs[1]);

		listen(multipleDivs, "one two three", eventCallback);
		ignore(multipleDivs, "one two three", eventCallback);

		trigger(multipleDivs[0], "one", false);
		trigger(multipleDivs[0], "two", false);
		trigger(multipleDivs[0], "three", false);
		trigger(multipleDivs[1], "one", false);
		trigger(multipleDivs[1], "two", false);
		trigger(multipleDivs[1], "three", false);

		setTimeout(() => {
			expect(eventCallback).not.toHaveBeenCalled();
			done();
		}, 20);
	});

	it("Should be able to ignore some of all the attached events.", function(done) {
		let eventCallback = jasmine.createSpy("eventCallback"),
			multipleDivs = [document.createElement("div"), document.createElement("div")];

		document.body.appendChild(multipleDivs[0]);
		document.body.appendChild(multipleDivs[1]);

		listen(multipleDivs, "one two three", eventCallback);
		ignore(multipleDivs, "one two", eventCallback);

		trigger(multipleDivs[0], "one", false);
		trigger(multipleDivs[0], "two", false);
		trigger(multipleDivs[0], "three", false);
		trigger(multipleDivs[1], "one", false);
		trigger(multipleDivs[1], "two", false);
		trigger(multipleDivs[1], "three", false);

		setTimeout(() => {
			expect(eventCallback.calls.count()).toBe(2);
			done();
		}, 20);
	});

	it("Should be able to ignore some of all the attached events.", function(done) {
		let eventCallback = jasmine.createSpy("eventCallback"),
			multipleDivs = [document.createElement("div"), document.createElement("div")];

		document.body.appendChild(multipleDivs[0]);
		document.body.appendChild(multipleDivs[1]);

		listen(multipleDivs, "one two three", eventCallback);
		ignore(multipleDivs[0], "one two three", eventCallback);

		trigger(multipleDivs[0], "one", false);
		trigger(multipleDivs[0], "two", false);
		trigger(multipleDivs[0], "three", false);
		trigger(multipleDivs[1], "one", false);
		trigger(multipleDivs[1], "two", false);
		trigger(multipleDivs[1], "three", false);

		setTimeout(() => {
			expect(eventCallback.calls.count()).toBe(3);
			done();
		}, 20);
	});
});
