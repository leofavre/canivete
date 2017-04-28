import parents from "../dist/parents";

describe("parents", function() {
	it(`Should return all parents of a DOM element.`, function() {
		var domChild = document.createElement("div");
		expect(parents(domChild)).toEqual([]);

		var domParent = document.createElement("div");
		domParent.appendChild(domChild);
		expect(parents(domChild)).toEqual([
			domParent
		]);

		var domGrandparent = document.createElement("div");
		domGrandparent.appendChild(domParent);
		expect(parents(domChild)).toEqual([
			domParent,
			domGrandparent
		]);

		document.body.appendChild(domGrandparent);
		expect(parents(domChild)).toEqual([
			domParent,
			domGrandparent,
			document.body,
			document.querySelector("html"),
			document
		]);
	});

	it(`Should throw an error when trying to find parents of something other than a DOM element.`, function() {
		expect(() => parents("laser")).toThrow();
		expect(() => parents(0)).toThrow();
		expect(() => parents(document.createTextNode("laser"))).toThrow();
		expect(() => parents(document.querySelectorAll("div"))).toThrow();
	});

	it(`Should return empty arrays for document and window.`, function() {
		expect(parents(window)).toEqual([]);
		expect(parents(document)).toEqual([]);
	});
});
