import getEventPath from "../dist/getEventPath";
import trigger from "../dist/trigger";

describe("getEventPath", function() {
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
			expect(getEventPath(evt)).toEqual([
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
			expect(getEventPath(evt)).toEqual([
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
			expect(getEventPath(evt)).toEqual([window]);
			done();
		};

		window.addEventListener("test", dealWithWindowEvent);
		trigger(window, "test");
	});

	it(`Should return undefined when trying to run getEventPath on something other than an event.`, function() {
		expect(getEventPath(document.createElement("div"))).toBe(undefined);
		expect(getEventPath("laser")).toBe(undefined);
		expect(getEventPath(0)).toBe(undefined);
		expect(getEventPath(document.createTextNode("laser"))).toBe(undefined);
		expect(getEventPath(document.querySelectorAll("div"))).toBe(undefined);
		expect(getEventPath(window)).toBe(undefined);
		expect(getEventPath(document)).toBe(undefined);
	});
});
