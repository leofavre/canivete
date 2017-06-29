import _createDomElement from "../dist/internal/dom/_createDomElement";
import setAttrs from "../dist/setAttrs";

describe("setAttrs", function() {
	it("Should set many attributes at once.", function() {
		let singleHTMLElement = _createDomElement("<div/>");
		setAttrs(singleHTMLElement, {
			"data-active": true,
			"data-level": 42
		});

		expect(singleHTMLElement.hasAttribute("data-active")).toBe(true);
		expect(singleHTMLElement.getAttribute("data-active")).toBe("");
		expect(singleHTMLElement.dataset.active).toBe("");

		expect(singleHTMLElement.hasAttribute("data-level")).toBe(true);
		expect(singleHTMLElement.getAttribute("data-level")).toBe("42");
		expect(singleHTMLElement.dataset.level).toBe("42");
	});

	it("Should set many attributes at once.", function() {
		let oneElement = _createDomElement('<p>Level 42</p>');

		setAttrs(oneElement, {
			"data-level": 42,
			"class": "level"
		});

		expect(oneElement.getAttribute("data-level")).toBe("42");
		expect(oneElement.getAttribute("class")).toBe("level");
		expect(oneElement.dataset.level).toBe("42");
		expect(oneElement.className).toBe("level");
	});

	it("Should accept a group of DOM nodes.", function() {
		let listElement = _createDomElement('<ul><li>A</li><li>B</li><li>C</li></ul>'),
			manyElements = listElement.querySelectorAll("li");

		setAttrs(manyElements, {
			"data-level": 42,
			"class": "item"
		});

		expect(manyElements[0].getAttribute("data-level")).toBe("42");
		expect(manyElements[0].getAttribute("class")).toBe("item");
		expect(manyElements[0].dataset.level).toBe("42");
		expect(manyElements[0].className).toBe("item");
	});

	it("Should add the attribute name to the tag if passed true.", function() {
		let singleHTMLElement = _createDomElement("<div/>");
		setAttrs(singleHTMLElement, {
			"data-active": true
		});

		expect(singleHTMLElement.hasAttribute("data-active")).toBe(true);
		expect(singleHTMLElement.getAttribute("data-active")).toBe("");
		expect(singleHTMLElement.dataset.active).toBe("");
	});

	it("Should remove the attribute name to the tag if passed false.", function() {
		let singleHTMLElement = _createDomElement("<div/>");
		setAttrs(singleHTMLElement, {
			"data-active": false
		});

		expect(singleHTMLElement.hasAttribute("data-active")).toBe(false);
		expect(singleHTMLElement.getAttribute("data-active")).toBe(null);
		expect(singleHTMLElement.dataset.active).toBe(undefined);
	});

	it("Should accept a group of DOM nodes.", function() {
		let domElA = _createDomElement("<div/>"),
			domElB = _createDomElement("<div/>");

		setAttrs([domElA, domElB], {
			"data-level": 42
		});

		expect(domElA.getAttribute("data-level")).toBe("42");
		expect(domElB.getAttribute("data-level")).toBe("42");
		expect(domElA.dataset.level).toBe("42");
		expect(domElB.dataset.level).toBe("42");
	});

	it("Should accept a group of DOM nodes.", function() {
		let domElA = _createDomElement("<div/>"),
			domElB = _createDomElement("<div/>");

		domElA.className = "setAttrs";
		domElB.className = "setAttrs";

		document.body.appendChild(domElA);
		document.body.appendChild(domElB);

		let manyElements = document.querySelectorAll(".setAttrs");

		setAttrs(manyElements, {
			"data-level": 42
		});

		expect(manyElements[0].getAttribute("data-level")).toBe("42");
		expect(manyElements[1].getAttribute("data-level")).toBe("42");
		expect(manyElements[0].dataset.level).toBe("42");
		expect(manyElements[1].dataset.level).toBe("42");
	});
});
