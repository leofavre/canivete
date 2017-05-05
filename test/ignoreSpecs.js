import ignore from "../dist/ignore";
import listen from "../dist/listen";
import trigger from "../dist/trigger";

describe("listen", function() {
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
});
