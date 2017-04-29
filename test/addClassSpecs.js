import addClass from "../dist/addClass";

describe("addClass", function() {
	for (let i = 0; i < 5; i++) {
		let newEl = document.createElement("div");
		newEl.className = "addClass addClass-" + i;
		document.body.appendChild(newEl);
	}

	it("Should add a CSS class to a single HTMLElement.", function() {
		let singleHTMLElement = document.querySelector(".addClass-1");
		addClass(singleHTMLElement, "oneMore");

		expect(singleHTMLElement.className).toBe("addClass addClass-1 oneMore");
	});

	it("Should not repeat the addition of the same CSS class.", function() {
		let singleHTMLElement = document.querySelector(".addClass-1");
		addClass(singleHTMLElement, "oneMore");

		expect(singleHTMLElement.className).toBe("addClass addClass-1 oneMore");
	});

	it("Should add a CSS class to many HTMLElements.", function() {
		let elementsNodeList = document.querySelectorAll(".addClass");

		for (let i = 0, len = elementsNodeList.length; i < len; i++) {
			elementsNodeList[i].className = "addClass";
		}

		addClass(elementsNodeList, "oneMore");

		for (let i = 0, len = elementsNodeList.length; i < len; i++) {
			expect(elementsNodeList[i].className).toBe("addClass oneMore");
		}
	});
});
