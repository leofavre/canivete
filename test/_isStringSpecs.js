import _isString from "../dist/internal/helpers/_isString";

describe("_isString", function() {
	it(`"Should return false if passed anything other than a string.`, function() {
		expect(_isString()).toBe(false);
		expect(_isString([])).toBe(false);
		expect(_isString({})).toBe(false);
		expect(_isString(null)).toBe(false);
		expect(_isString(undefined)).toBe(false);
		expect(_isString(NaN)).toBe(false);
		expect(_isString(new Set())).toBe(false);
		expect(_isString(new WeakSet())).toBe(false);
		expect(_isString(new Map())).toBe(false);
		expect(_isString(new WeakMap())).toBe(false);
		expect(_isString(document.createElement("div"))).toBe(false);
		expect(_isString(15)).toBe(false);
		expect(_isString(15.45)).toBe(false);
		expect(_isString(Math.PI)).toBe(false);
		expect(_isString("")).toBe(true);
		expect(_isString("345")).toBe(true);
		expect(_isString(new String("window"))).toBe(true);
		expect(_isString(new String("😋📋👌"))).toBe(true);
		expect(_isString(0)).toBe(false);
		expect(_isString(1)).toBe(false);
		expect(_isString(true)).toBe(false);
		expect(_isString(false)).toBe(false);
	});
});
