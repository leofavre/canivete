import _domElementsToArray from "../dist/internal/dom/_domElementsToArray";

describe("_domElementsToArray", function() {
	for (let i = 0; i < 5; i++) {
		let newEl = document.createElement("div");
		newEl.className = "domElementsToArray domElementsToArray-" + i;
		document.body.appendChild(newEl);
	}

	it("Should convert a single HTMLElement to an Array.", function() {
		let singleHTMLElement = document.querySelector(".domElementsToArray-1");
		let elementsArray = _domElementsToArray(singleHTMLElement);

		expect(Array.isArray(singleHTMLElement)).toBe(false);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(1);
	});

	it("Should convert a NodeList with many elements to an Array.", function() {
		let elementsNodeList = document.querySelectorAll(".domElementsToArray");
		let elementsArray = _domElementsToArray(elementsNodeList);

		expect(Array.isArray(elementsNodeList)).toBe(false);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(5);
	});

	it("Should convert a NodeList with one element to an Array.", function() {
		let elementsNodeList = document.querySelectorAll(".domElementsToArray-1");
		let elementsArray = _domElementsToArray(elementsNodeList);

		expect(Array.isArray(elementsNodeList)).toBe(false);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(1);
	});

	it("Should convert an HTMLCollection with many elements to an Array.", function() {
		let elementsHTMLCollection = document.getElementsByClassName("domElementsToArray");
		let elementsArray = _domElementsToArray(elementsHTMLCollection);

		expect(Array.isArray(elementsHTMLCollection)).toBe(false);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(5);
	});

	it("Should convert an HTMLCollection with one element to an Array.", function() {
		let elementsHTMLCollection = document.getElementsByClassName("domElementsToArray-1");
		let elementsArray = _domElementsToArray(elementsHTMLCollection);

		expect(Array.isArray(elementsHTMLCollection)).toBe(false);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(1);
	});

	it("Should allow an Array of HTMLElements as parameter.", function() {
		let elementsHTMLElementArray = [document.querySelector(".domElementsToArray-1"), document.querySelector(".domElementsToArray-2")];
		let elementsArray = _domElementsToArray(elementsHTMLElementArray);

		expect(Array.isArray(elementsHTMLElementArray)).toBe(true);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(2);
	});

	it("Should allow a Set of HTMLElements as parameter.", function() {
		let elementsHTMLElementSet = new Set();
		elementsHTMLElementSet.add(document.querySelector(".domElementsToArray-1"));
		elementsHTMLElementSet.add(document.querySelector(".domElementsToArray-2"));
		let elementsArray = _domElementsToArray(elementsHTMLElementSet);

		expect(Array.isArray(elementsHTMLElementSet)).toBe(false);
		expect(Array.isArray(elementsArray)).toBe(true);
		expect(elementsArray.length).toBe(2);
	});

	it("Should accept undefined, null, empty Arrays or empty Sets as parameters.", function() {
		let emptySet = new Set();

		expect(() => _domElementsToArray()).not.toThrow();
		expect(() => _domElementsToArray([])).not.toThrow();
		expect(() => _domElementsToArray(emptySet)).not.toThrow();
	});

	it("Should throw an error if the parameter is not empty, an HTMLElement or a group of HTMLElements.", function() {
		expect(() => _domElementsToArray(125)).toThrow();
		expect(() => _domElementsToArray("String")).toThrow();
		expect(() => _domElementsToArray({})).toThrow();
	});
});
