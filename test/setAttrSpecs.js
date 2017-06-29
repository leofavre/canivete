import _createDomElement from "../dist/internal/dom/_createDomElement";
import setAttr from "../dist/setAttr";

describe("setAttr", function() {
	it("Should add the attribute name to the tag if passed true.", function() {
		let singleHTMLElement = _createDomElement("<div/>");
		setAttr(singleHTMLElement, "data-active", true);

		expect(singleHTMLElement.hasAttribute("data-active")).toBe(true);
		expect(singleHTMLElement.getAttribute("data-active")).toBe("");
		expect(singleHTMLElement.dataset.active).toBe("");
	});

	it("Should remove the attribute name to the tag if passed false.", function() {
		let singleHTMLElement = _createDomElement("<div/>");
		setAttr(singleHTMLElement, "data-active", false);

		expect(singleHTMLElement.hasAttribute("data-active")).toBe(false);
		expect(singleHTMLElement.getAttribute("data-active")).toBe(null);
		expect(singleHTMLElement.dataset.active).toBe(undefined);
	});

	it("Should add the attribute name to the tag if passed a string.", function() {
		let oneElement = _createDomElement('<p>Level 42</p>');
		setAttr(oneElement, "data-level", 42);

		expect(oneElement.getAttribute("data-level")).toBe("42");
		expect(oneElement.dataset.level).toBe("42");

		let otherElement = _createDomElement('<a href="/news">News</a>');
		setAttr(otherElement, "class", "button");

		expect(otherElement.getAttribute("class")).toBe("button");
		expect(otherElement.className).toBe("button");
	});

	it("Should accept a group of DOM nodes.", function() {
		let listElement = _createDomElement('<ul><li>A</li><li>B</li><li>C</li></ul>'),
		manyElements = listElement.querySelectorAll("li");

		setAttr(manyElements, "class", "item");

		expect(manyElements[0].getAttribute("class")).toBe("item");
		expect(manyElements[0].className).toBe("item");
		expect(manyElements[1].getAttribute("class")).toBe("item");
		expect(manyElements[1].className).toBe("item");
	});

	it("Should accept a group of DOM nodes.", function() {
		let domElA = _createDomElement("<div/>"),
			domElB = _createDomElement("<div/>");

		setAttr([domElA, domElB], "data-level", 42);

		expect(domElA.getAttribute("data-level")).toBe("42");
		expect(domElB.getAttribute("data-level")).toBe("42");
		expect(domElA.dataset.level).toBe("42");
		expect(domElB.dataset.level).toBe("42");
	});

	it("Should accept a group of DOM nodes.", function() {
		let domElA = _createDomElement("<div/>"),
			domElB = _createDomElement("<div/>");

		domElA.className = "setAttr";
		domElB.className = "setAttr";

		document.body.appendChild(domElA);
		document.body.appendChild(domElB);

		let manyElements = document.querySelectorAll(".setAttr");

		setAttr(manyElements, "data-level", 42);

		expect(manyElements[0].getAttribute("data-level")).toBe("42");
		expect(manyElements[1].getAttribute("data-level")).toBe("42");
		expect(manyElements[0].dataset.level).toBe("42");
		expect(manyElements[1].dataset.level).toBe("42");
	});
});
