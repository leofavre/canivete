import _isNumber from "../dist/internal/number/_isNumber";

describe("_isNumber", function() {
	it(`"Should return false if passed anything other than a number.`, function() {
		expect(_isNumber()).toBe(false);
		expect(_isNumber([])).toBe(false);
		expect(_isNumber({})).toBe(false);
		expect(_isNumber(null)).toBe(false);
		expect(_isNumber(undefined)).toBe(false);
		expect(_isNumber(NaN)).toBe(false);
		expect(_isNumber("")).toBe(false);
		expect(_isNumber("345")).toBe(false);
		expect(_isNumber(new Set())).toBe(false);
		expect(_isNumber(new WeakSet())).toBe(false);
		expect(_isNumber(new Map())).toBe(false);
		expect(_isNumber(new WeakMap())).toBe(false);
		expect(_isNumber(document.createElement("div"))).toBe(false);

		expect(_isNumber(15)).toBe(true);
		expect(_isNumber(15.45)).toBe(true);
		expect(_isNumber(Math.PI)).toBe(true);
	});
});
