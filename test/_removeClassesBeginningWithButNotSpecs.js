import _removeClassesBeginningWithButNot from "../dist/internal/classname/_removeClassesBeginningWithButNot";

describe("_removeClassesBeginningWithButNot", function() {
	for (let i = 0; i < 5; i++) {
		let newEl = document.createElement("div");
		newEl.className = "menu__item button button__active button__level--" + i;
		document.body.appendChild(newEl);
	}

	it("Should remove one or many CSS classes from a single HTMLElement.", function() {
		let singleHTMLElement = document.querySelector(".button__level--1");
		_removeClassesBeginningWithButNot(singleHTMLElement, "button");

		expect(singleHTMLElement.className).toBe("menu__item button");
	});

	it("Should not change a CSS class when trying to remove an inexistent class.", function() {
		let singleHTMLElement = document.querySelector(".button__level--2");
		_removeClassesBeginningWithButNot(singleHTMLElement, "bogus");

		expect(singleHTMLElement.className).toBe("menu__item button button__active button__level--2");
	});

	it("Should remove one or many CSS classes from many HTMLElements.", function() {
		let elementsNodeList = document.querySelectorAll(".button");

		_removeClassesBeginningWithButNot(elementsNodeList, "button");

		for (let i = 0, len = elementsNodeList.length; i < len; i++) {
			expect(elementsNodeList[i].className).toBe("menu__item button");
		}
	});
});
