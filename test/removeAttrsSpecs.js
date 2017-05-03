import removeAttrs from "../dist/removeAttrs";

describe("removeAttrs", function() {
	it("Should remove many attributes from a DOM element.", function() {
		let videoHTMLElement = document.createElement("video");
		videoHTMLElement.setAttribute("controls", "");
		videoHTMLElement.setAttribute("data-paused", "");

		removeAttrs(videoHTMLElement, ["controls", "data-paused"]);

		expect(videoHTMLElement.hasAttribute("controls")).toBe(false);
		expect(videoHTMLElement.getAttribute("controls")).toBe(null);

		expect(videoHTMLElement.hasAttribute("data-paused")).toBe(false);
		expect(videoHTMLElement.getAttribute("controls")).toBe(null);
		expect(videoHTMLElement.dataset.paused).toBe(undefined);
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

		removeAttrs(manyElements, ["data-level", "class"]);

		expect(manyElements[0].getAttribute("data-level")).toBe(null);
		expect(manyElements[0].getAttribute("class")).toBe(null);
		expect(manyElements[0].dataset.level).toBe(undefined);
		expect(manyElements[0].className).toBe("");
	});
});
