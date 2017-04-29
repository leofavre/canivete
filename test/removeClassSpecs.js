import removeClass from "../dist/removeClass";

describe("removeClass", function() {
	for (let i = 0; i < 5; i++) {
		let newEl = document.createElement("div");
		newEl.className = "oneMore removeClass removeClass-" + i;
		document.body.appendChild(newEl);
	}

	it("Should add a CSS class to a single HTMLElement.", function() {
		let singleHTMLElement = document.querySelector(".removeClass-1");
		removeClass(singleHTMLElement, "oneMore");

		expect(singleHTMLElement.className).toBe("removeClass removeClass-1");
	});

	it("Should not change a CSS class when trying to remove an inexistent class.", function() {
		let singleHTMLElement = document.querySelector(".removeClass-1");
		removeClass(singleHTMLElement, "oneMore");

		expect(singleHTMLElement.className).toBe("removeClass removeClass-1");
	});

	it("Should add a CSS class to many HTMLElements.", function() {
		let elementsNodeList = document.querySelectorAll(".removeClass");

		for (let i = 0, len = elementsNodeList.length; i < len; i++) {
			elementsNodeList[i].className = "oneMore removeClass";
		}

		removeClass(elementsNodeList, "oneMore");

		for (let i = 0, len = elementsNodeList.length; i < len; i++) {
			expect(elementsNodeList[i].className).toBe("removeClass");
		}
	});
});
