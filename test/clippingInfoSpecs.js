import clippingInfo from "../dist/clippingInfo";

describe("clippingInfo", function() {
	let domEl = document.createElement("div");
	let maskEl = document.createElement("div");

	domEl.style.cssText = "position: absolute; width: 40px; height: 40px; display: block; background: rgba(153, 0, 153, 0.3);";
	maskEl.style.cssText = "position: relative; width: 100px; height: 100px; display: block; background: rgba(153, 0, 153, 0.3);";

	maskEl.appendChild(domEl);
	document.body.appendChild(maskEl);

	function changeSize(domEl, newWidth, newHeight) {
		domEl.style.width = newWidth + "px";
		domEl.style.height = newHeight + "px";
	}

	function changePosition(domEl, newTop, newLeft) {
		domEl.style.top = newTop + "px";
		domEl.style.left = newLeft + "px";
	}

	function changeClippingInfo(domEl, maskEl, newTop, newLeft) {
		changePosition(domEl, newTop, newLeft);
		return clippingInfo(domEl, maskEl);
	}

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


	// Child.width < Mask.width && Child.height < Mask.height


	// Contained

	it("Should behave like child is fully inside, contained by the mask.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 30, 30);
		expectTruthOnlyFrom(["isFullyVisible", "isAsVisibleAsPossible"], availableKeys, currentInfo);
	});


	// Outside

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
		expectTruthOnlyFrom(["isOffBottom", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is outside, below and on the left.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 120, -60);
		expectTruthOnlyFrom(["isOffBottom", "isOffLeft", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is outside and on the left.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 30, -60);
		expectTruthOnlyFrom(["isOffLeft", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});


	// Clipped

	it("Should behave like child is clipped and positioned above and on the left.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, -20, -20);
		expectTruthOnlyFrom(["isClippedTop", "isClippedLeft", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is clipped and positioned above.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, -20, 30);
		expectTruthOnlyFrom(["isClippedTop", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is clipped and positioned above and on the right.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, -20, 80);
		expectTruthOnlyFrom(["isClippedTop", "isClippedRight", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is clipped and positioned on the right.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 30, 80);
		expectTruthOnlyFrom(["isClippedRight", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is clipped and positioned below and on the right.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 80, 80);
		expectTruthOnlyFrom(["isClippedBottom", "isClippedRight", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is clipped and positioned below.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 80, 30);
		expectTruthOnlyFrom(["isClippedBottom", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is clipped and positioned below and on the left.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 80, -20);
		expectTruthOnlyFrom(["isClippedLeft", "isClippedBottom", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is clipped and positioned on the left.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 30, -20);
		expectTruthOnlyFrom(["isClippedLeft", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});


	// Child.width < Mask.width && Child.height > Mask.height


	// Outside


	it("Should change the size of the child.", function() {
		changeSize(domEl, 120, 40);
	});

	it("Should behave like child is outside and above.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, -60, -10);
		expectTruthOnlyFrom(["isOffTop", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is clipped and positioned above.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, -10, -10);
		expectTruthOnlyFrom(["isClippedLeft", "isClippedRight", "isClippedTop", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is as inside as possible.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 30, -10);
		expectTruthOnlyFrom(["isClippedLeft", "isClippedRight", "isClipped", "isPartiallyVisible", "isAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is clipped and positioned above.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 70, -10);
		expectTruthOnlyFrom(["isClippedLeft", "isClippedRight", "isClippedBottom", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});

	it("Should behave like child is outside and below.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 120, -10);
		expectTruthOnlyFrom(["isOffBottom", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], availableKeys, currentInfo);
	});
});
