import _isBoolean from "../dist/internal/helpers/_isBoolean";

describe("_isBoolean", function() {
	it(`"Should return false if passed anything other than a string.`, function() {
		expect(_isBoolean()).toBe(false);
		expect(_isBoolean([])).toBe(false);
		expect(_isBoolean({})).toBe(false);
		expect(_isBoolean(null)).toBe(false);
		expect(_isBoolean(undefined)).toBe(false);
		expect(_isBoolean(NaN)).toBe(false);
		expect(_isBoolean(new Set())).toBe(false);
		expect(_isBoolean(new WeakSet())).toBe(false);
		expect(_isBoolean(new Map())).toBe(false);
		expect(_isBoolean(new WeakMap())).toBe(false);
		expect(_isBoolean(document.createElement("div"))).toBe(false);
		expect(_isBoolean(15)).toBe(false);
		expect(_isBoolean(15.45)).toBe(false);
		expect(_isBoolean(Math.PI)).toBe(false);
		expect(_isBoolean("")).toBe(false);
		expect(_isBoolean("345")).toBe(false);
		expect(_isBoolean(new String("window"))).toBe(false);
		expect(_isBoolean(new String("😋📋👌"))).toBe(false);
		expect(_isBoolean(0)).toBe(false);
		expect(_isBoolean(1)).toBe(false);
		expect(_isBoolean(true)).toBe(true);
		expect(_isBoolean(false)).toBe(true);
	});
});
