import eventPath from "../dist/eventPath";
import trigger from "../dist/trigger";

describe("eventPath", function() {
	it(`Should return an array with all DOM elements affected by an event.`, function(done) {
		let domChild = document.createElement("div"),
			domParent = document.createElement("div"),
			domGrandparent = document.createElement("div"),
			body = document.body,
			html = document.querySelector("html");

		domParent.appendChild(domChild);
		domGrandparent.appendChild(domParent);
		body.appendChild(domGrandparent);

		const dealWithChildEvent = evt => {
			expect(eventPath(evt)).toEqual([
				domChild,
				domParent,
				domGrandparent,
				body,
				html,
				document,
				window
			]);
		};

		const dealWithGrandparentEvent = evt => {
			expect(eventPath(evt)).toEqual([
				domGrandparent,
				body,
				html,
				document,
				window
			]);

			done();
		};

		domChild.addEventListener("test", dealWithChildEvent);
		domGrandparent.addEventListener("test", dealWithGrandparentEvent);

		trigger(domChild, "test");
		trigger(domGrandparent, "test");
	});

	it(`Should always end with window.`, function(done) {
		const dealWithWindowEvent = evt => {
			expect(eventPath(evt)).toEqual([window]);
			done();
		};

		window.addEventListener("test", dealWithWindowEvent);
		trigger(window, "test");
	});

	it(`Should return undefined when trying to run eventPath on something other than an event.`, function() {
		expect(eventPath(document.createElement("div"))).toBe(undefined);
		expect(eventPath("laser")).toBe(undefined);
		expect(eventPath(0)).toBe(undefined);
		expect(eventPath(document.createTextNode("laser"))).toBe(undefined);
		expect(eventPath(document.querySelectorAll("div"))).toBe(undefined);
		expect(eventPath(window)).toBe(undefined);
		expect(eventPath(document)).toBe(undefined);
	});
});
