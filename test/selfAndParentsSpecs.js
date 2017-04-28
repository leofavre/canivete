import selfAndParents from "../dist/selfAndParents";

describe("selfAndParents", function() {
	it(`Should return all selfAndParents of a DOM element.`, function() {
		var domChild = document.createElement("div");
		expect(selfAndParents(domChild)).toEqual([
			domChild
		]);

		var domParent = document.createElement("div");
		domParent.appendChild(domChild);
		expect(selfAndParents(domChild)).toEqual([
			domChild,
			domParent
		]);

		var domGrandparent = document.createElement("div");
		domGrandparent.appendChild(domParent);
		expect(selfAndParents(domChild)).toEqual([
			domChild,
			domParent,
			domGrandparent
		]);

		document.body.appendChild(domGrandparent);
		expect(selfAndParents(domChild)).toEqual([
			domChild,
			domParent,
			domGrandparent,
			document.body,
			document.querySelector("html"),
			document
		]);
	});

	it(`Should throw an error when trying to find selfAndParents of something other than a DOM element.`, function() {
		expect(() => selfAndParents("laser")).toThrow();
		expect(() => selfAndParents(0)).toThrow();
		expect(() => selfAndParents(document.createTextNode("laser"))).toThrow();
		expect(() => selfAndParents(document.querySelectorAll("div"))).toThrow();
	});

	it(`Should return an array with document for document and an array with window for window.`, function() {
		expect(selfAndParents(window)).toEqual([window]);
		expect(selfAndParents(document)).toEqual([document]);
	});
});
