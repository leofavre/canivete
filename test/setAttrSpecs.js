import setAttr from "../dist/setAttr";

describe("setAttr", function() {
	it("Should add the attribute name to the tag if passed true.", function() {
		let singleHTMLElement = document.createElement("div");
		setAttr(singleHTMLElement, "data-active", true);

		expect(singleHTMLElement.hasAttribute("data-active")).toBe(true);
		expect(singleHTMLElement.getAttribute("data-active")).toBe("");
		expect(singleHTMLElement.dataset.active).toBe("");
	});

	it("Should remove the attribute name to the tag if passed false.", function() {
		let singleHTMLElement = document.createElement("div");
		setAttr(singleHTMLElement, "data-active", false);

		expect(singleHTMLElement.hasAttribute("data-active")).toBe(false);
		expect(singleHTMLElement.getAttribute("data-active")).toBe(null);
		expect(singleHTMLElement.dataset.active).toBe(undefined);
	});

	it("Should accept class or className.", function() {
		let singleHTMLElement = document.createElement("div");
		setAttr(singleHTMLElement, "className", "button");

		expect(singleHTMLElement.hasAttribute("class")).toBe(true);
		expect(singleHTMLElement.getAttribute("class")).toBe("button");
		expect(singleHTMLElement.className).toBe("button");
	});

	it("Should accept class or className.", function() {
		let singleHTMLElement = document.createElement("div");
		setAttr(singleHTMLElement, "class", "button");

		expect(singleHTMLElement.hasAttribute("class")).toBe(true);
		expect(singleHTMLElement.getAttribute("class")).toBe("button");
		expect(singleHTMLElement.className).toBe("button");
	});

	it("Should accept a group of DOM nodes.", function() {
		let domElA = document.createElement("div"),
			domElB = document.createElement("div");

		setAttr([domElA, domElB], "data-level", 42);

		expect(domElA.getAttribute("data-level")).toBe("42");
		expect(domElB.getAttribute("data-level")).toBe("42");
		expect(domElA.dataset.level).toBe("42");
		expect(domElB.dataset.level).toBe("42");
	});

	it("Should accept a group of DOM nodes.", function() {
		let domElA = document.createElement("div"),
			domElB = document.createElement("div");

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
