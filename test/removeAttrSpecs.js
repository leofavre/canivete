import _createDomElement from "../dist/internal/dom/_createDomElement";
import removeAttr from "../dist/removeAttr";

describe("removeAttr", function() {
	it("Should remove an attribute from a DOM element.", function() {
		let videoHTMLElement = document.createElement("video");
		videoHTMLElement.setAttribute("controls", "");
		videoHTMLElement.setAttribute("data-paused", "");

		removeAttr(videoHTMLElement, "controls");
		removeAttr(videoHTMLElement, "data-paused");

		expect(videoHTMLElement.hasAttribute("controls")).toBe(false);
		expect(videoHTMLElement.getAttribute("controls")).toBe(null);

		expect(videoHTMLElement.hasAttribute("data-paused")).toBe(false);
		expect(videoHTMLElement.getAttribute("controls")).toBe(null);
		expect(videoHTMLElement.dataset.paused).toBe(undefined);
	});

	it("Should remove an attribute from a DOM element.", function() {
		let oneElement = _createDomElement('<p data-level="42">Level 42</p>');
		removeAttr(oneElement, "data-level");

		expect(oneElement.getAttribute("data-level")).toBe(null);
		expect(oneElement.dataset.level).toBe(undefined);
	});

	it("Should remove an attribute from a DOM element.", function() {
		let oneElement = _createDomElement('<a class="button" href="/news">News</a>');
		removeAttr(oneElement, "class");

		expect(oneElement.getAttribute("class")).toBe(null);
		expect(oneElement.className).toBe("");
	});

	it("Should accept a group of DOM nodes.", function() {
		let domElA = document.createElement("div"),
			domElB = document.createElement("div");

		domElA.className = "removeAttr";
		domElA.dataset.level = 42;
		domElB.className = "removeAttr";
		domElB.dataset.level = 42;

		document.body.appendChild(domElA);
		document.body.appendChild(domElB);

		let manyElements = document.querySelectorAll(".removeAttr");

		removeAttr(manyElements, "data-level");

		expect(manyElements[0].getAttribute("data-level")).toBe(null);
		expect(manyElements[1].getAttribute("data-level")).toBe(null);
		expect(manyElements[0].dataset.level).toBe(undefined);
		expect(manyElements[1].dataset.level).toBe(undefined);
	});

	it("Should accept a group of DOM nodes.", function() {
		let listElement = _createDomElement('<ul><li class="item">A</li><li class="item">B</li></ul>'),
			manyElements = listElement.querySelectorAll("li");

		removeAttr(manyElements, "class");

		expect(manyElements[0].getAttribute("class")).toBe(null);
		expect(manyElements[1].getAttribute("class")).toBe(null);
		expect(manyElements[0].className).toBe("");
		expect(manyElements[1].className).toBe("");
	});
});
