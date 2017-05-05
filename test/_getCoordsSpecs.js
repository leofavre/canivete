import _getCoords from "../dist/internal/geometry/_getCoords";

describe("_getCoords", function() {
	let maskEl = document.createElement("div");
	maskEl.style.cssText = "position: fixed; top: 250px; left: 150px; width: 150px; height: 300px; display: block; background: rgba(153, 0, 153, 0.3);";
	document.body.appendChild(maskEl);

	it("Should be able to get coordinates from a DOMElement", function() {
		expect(_getCoords(maskEl).top).toBe(250);
		expect(_getCoords(maskEl).bottom).toBe(550);
		expect(_getCoords(maskEl).left).toBe(150);
		expect(_getCoords(maskEl).right).toBe(300);
	});

	let maskRect = maskEl.getBoundingClientRect();

	it("Should be able to get coordinates from a DOMRect", function() {
		expect(_getCoords(maskRect).top).toBe(250);
		expect(_getCoords(maskRect).bottom).toBe(550);
		expect(_getCoords(maskRect).left).toBe(150);
		expect(_getCoords(maskRect).right).toBe(300);
	});

	let maskObj = {
		top: 250,
		bottom: 550,
		left: 150,
		right: 300
	};

	it("Should be able to get coordinates from a plain Object", function() {
		expect(_getCoords(maskObj).top).toBe(250);
		expect(_getCoords(maskObj).bottom).toBe(550);
		expect(_getCoords(maskObj).left).toBe(150);
		expect(_getCoords(maskObj).right).toBe(300);
	});

	let wrongObj = {
		top: "250px",
		bottom: "550px",
		left: "150px",
		right: "300px"
	};

	let otherWrongObj = {
		top: 250,
		bottom: 550
	};

	it("Should throw an error if the second parameter is not undefined, a DOM element or an object like a DOMRect (containing top, bottom, left and right parameters).", function() {
		expect(() => _getCoords(wrongObj)).toThrow();
		expect(() => _getCoords(otherWrongObj)).toThrow();
		expect(() => _getCoords(189)).toThrow();
		expect(() => _getCoords("String")).toThrow();
		expect(() => _getCoords([250, 350, 150, 300])).toThrow();
	});
});
