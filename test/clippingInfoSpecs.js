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

	function testClippingInfo(keys, availableKeys, currentInfo) {
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

	function testMultipleCoordinates(keys, newTops, newLefts, domEl, maskEl, availableKeys) {
		let currentInfo;

		newTops = Array.isArray(newTops) ? newTops : [newTops];
		newLefts = Array.isArray(newLefts) ? newLefts : [newLefts];

		newTops.forEach(newTop => {
			newLefts.forEach(newLeft => {
				currentInfo = changeClippingInfo(domEl, maskEl, newTop, newLeft);
				testClippingInfo(keys, availableKeys, currentInfo);
			});
		});
	}


	// Child.width < Mask.width && Child.height < Mask.height


	// Contained

	it("Should behave like the child is fully contained by the mask and is centered.", function() {
		let currentInfo = changeClippingInfo(domEl, maskEl, 30, 30);
		testClippingInfo(["isFullyVisible", "isAsVisibleAsPossible"], availableKeys, currentInfo);
	});


	// Outside

	it("Should behave like the child is outside, above and on the left.", function() {
		testMultipleCoordinates(
			["isOffTop", "isOffLeft", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], [-60, -40], [-60, -40],
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is outside and above.", function() {
		testMultipleCoordinates(
			["isOffTop", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], [-60, -40], [-20, 0, 30, 60, 80],
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is outside, above and on the right.", function() {
		testMultipleCoordinates(
			["isOffTop", "isOffRight", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], [-60, -40], [100, 120],
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is outside and on the right.", function() {
		testMultipleCoordinates(
			["isOffRight", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], [-20, 0, 30, 60, 80], [100, 120],
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is outside, below and on the right.", function() {
		testMultipleCoordinates(
			["isOffBottom", "isOffRight", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], [100, 120], [100, 120],
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is outside and below.", function() {
		testMultipleCoordinates(
			["isOffBottom", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], [100, 120], [-20, 0, 30, 60, 80],
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is outside, below and on the left.", function() {
		testMultipleCoordinates(
			["isOffBottom", "isOffLeft", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], [100, 120], [-60, -40],
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is outside and on the left.", function() {
		testMultipleCoordinates(
			["isOffLeft", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], [-20, 0, 30, 60, 80], [-60, -40],
			domEl, maskEl, availableKeys
		);
	});


	// Clipped

	it("Should behave like the child is clipped and positioned above and on the left.", function() {
		testMultipleCoordinates(
			["isClippedTop", "isClippedLeft", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], -20, -20,
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is clipped and positioned above.", function() {
		testMultipleCoordinates(
			["isClippedTop", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], -20, [0, 30, 60],
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is clipped and positioned above and on the right.", function() {
		testMultipleCoordinates(
			["isClippedTop", "isClippedRight", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], -20, 80,
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is clipped and positioned on the right.", function() {
		testMultipleCoordinates(
			["isClippedRight", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], [0, 30, 60], 80,
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is clipped and positioned below and on the right.", function() {
		testMultipleCoordinates(
			["isClippedBottom", "isClippedRight", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], 80, 80,
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is clipped and positioned below.", function() {
		testMultipleCoordinates(
			["isClippedBottom", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], 80, [0, 30, 60],
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is clipped and positioned below and on the left.", function() {
		testMultipleCoordinates(
			["isClippedLeft", "isClippedBottom", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], 80, -20,
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is clipped and positioned on the left.", function() {
		testMultipleCoordinates(
			["isClippedLeft", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], [0, 30, 60], -20,
			domEl, maskEl, availableKeys
		);
	});


	// Child.width < Mask.width && Child.height > Mask.height


	it("Should change the size of the child.", function() {
		changeSize(domEl, 120, 40);
	});

	it("Should behave like the child is outside and above.", function() {
		testMultipleCoordinates(
			["isOffTop", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], [-60, -40], -10,
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is clipped and positioned above.", function() {
		testMultipleCoordinates(
			["isClippedLeft", "isClippedRight", "isClippedTop", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], -10, -10,
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is as visible as possible.", function() {
		testMultipleCoordinates(
			["isClippedLeft", "isClippedRight", "isClipped", "isPartiallyVisible", "isAsVisibleAsPossible"], [0, 30, 60], -10,
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is clipped and positioned below.", function() {
		testMultipleCoordinates(
			["isClippedLeft", "isClippedRight", "isClippedBottom", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], 70, -10,
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is outside and below.", function() {
		testMultipleCoordinates(
			["isOffBottom", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], [100, 120], -10,
			domEl, maskEl, availableKeys
		);
	});


	// Child.width > Mask.width && Child.height < Mask.height


	it("Should change the size of the child.", function() {
		changeSize(domEl, 40, 120);
	});

	it("Should behave like the child is outside and on the left.", function() {
		testMultipleCoordinates(
			["isOffLeft", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], -10, [-60, -40],
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is clipped and positioned on the left.", function() {
		testMultipleCoordinates(
			["isClippedTop", "isClippedBottom", "isClippedLeft", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], -10, -10,
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is as visible as possible.", function() {
		testMultipleCoordinates(
			["isClippedTop", "isClippedBottom", "isClipped", "isPartiallyVisible", "isAsVisibleAsPossible"], -10, [0, 30, 60],
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is clipped and positioned on the right.", function() {
		testMultipleCoordinates(
			["isClippedTop", "isClippedBottom", "isClippedRight", "isClipped", "isPartiallyVisible", "isNotAsVisibleAsPossible"], -10, 70,
			domEl, maskEl, availableKeys
		);
	});

	it("Should behave like the child is outside and on the right.", function() {
		testMultipleCoordinates(
			["isOffRight", "isOff", "isInvisible", "isNotAsVisibleAsPossible"], -10, [100, 120],
			domEl, maskEl, availableKeys
		);
	});


	// Child.width > Mask.width && Child.height > Mask.height
	

	it("Should change the size of the child.", function() {
		changeSize(domEl, 120, 120);
	});

	it("Should behave like the child contains the mask and is centered.", function() {
		testMultipleCoordinates(
			["isClippedTop", "isClippedBottom", "isClippedLeft", "isClippedRight", "isClipped", "isPartiallyVisible", "isAsVisibleAsPossible"], -10, -10,
			domEl, maskEl, availableKeys
		);
	});
});
