import clippingInfo from "../dist/clippingInfo";

describe("clippingInfo", function() {
	let domEl = document.createElement("div");
	let maskEl = document.createElement("div");

	domEl.style.cssText = "position: absolute; width: 40px; height: 40px; display: block;";
	maskEl.style.cssText = "position: relative; width: 100px; height: 100px; display: block;";

	maskEl.appendChild(domEl);
	document.body.appendChild(maskEl);

	const availableKeys = [
		"isOffTop",
		"isOffBottom",
		"isOffLeft",
		"isOffRight",
		"isOff",
		"isClippedTop",
		"isClippedBottom",
		"isClippedLeft",
		"isClippedRight",
		"isClipped",
		"isFullyVisible",
		"isPartiallyVisible",
		"isInvisible",
		"isAsVisibleAsPossible",
		"isNotAsVisibleAsPossible"
	];

	function expectTruthOnlyFrom(keys, availableKeys, currentInfo) {
		for (let i = 0, len = availableKeys.length; i < len; i++) {
			let currentKey = availableKeys[i];

			if (keys.includes(currentKey)) {
				expect(currentInfo[currentKey]).toBe(true);
			}
			else {
				expect(currentInfo[currentKey]).toBe(false);
			}
		}
	}

	function changePosition(domEl, newTop, newLeft) {
		domEl.style.top = newTop + "px";
		domEl.style.left = newLeft + "px";
	}

	function changeClippingInfo(domEl, maskEl, newTop, newLeft) {
		changePosition(domEl, newTop, newLeft);
		return clippingInfo(domEl, maskEl);
	}

	it("Should behave like child is outside, above and on the left.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, -60, -60);
		expectTruthOnlyFrom(["isOffTop", "isOffLeft", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is outside and above.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, -60, 30);
		expectTruthOnlyFrom(["isOffTop", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is outside, above and on the right.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, -60, 120);
		expectTruthOnlyFrom(["isOffTop", "isOffRight", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is outside and on the right.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 30, 120);
		expectTruthOnlyFrom(["isOffRight", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is outside, below and on the right.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 120, 120);
		expectTruthOnlyFrom(["isOffBottom", "isOffRight", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is outside and below.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 120, 30);
		expectTruthOnlyFrom(["isOffBottom","isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is outside, below and on the left.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 120, -60);
		expectTruthOnlyFrom(["isOffBottom", "isOffLeft", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is outside and on the left.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 30, -60);
		expectTruthOnlyFrom(["isOffLeft", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});
});
