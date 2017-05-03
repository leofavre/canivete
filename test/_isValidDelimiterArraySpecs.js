import _isValidDelimiterArray from "../dist/internal/bem/_isValidDelimiterArray";

describe("_isValidDelimiterArray", function() {
	it(`"Should return false if passed anything other than a BEM delimiter array.`, function() {
		expect(_isValidDelimiterArray()).toBe(false);
		expect(_isValidDelimiterArray(0)).toBe(false);
		expect(_isValidDelimiterArray("")).toBe(false);
		expect(_isValidDelimiterArray("__ -- -")).toBe(false);
		expect(_isValidDelimiterArray({})).toBe(false);
		expect(_isValidDelimiterArray([])).toBe(false);
		expect(_isValidDelimiterArray(["", "", ""])).toBe(false);
		expect(_isValidDelimiterArray(["__", "--"])).toBe(false);
		expect(_isValidDelimiterArray(["__", "--", ""])).toBe(false);
		expect(_isValidDelimiterArray(["__", "", "-"])).toBe(false);
		expect(_isValidDelimiterArray(["", "--", "-"])).toBe(false);
	});

	it(`"Should return true if passed a valid BEM delimiter array: with 3 non-empty strings.`, function() {
		expect(_isValidDelimiterArray(["__", "--", "-"])).toBe(true);
		expect(_isValidDelimiterArray(["__", "_", "_"])).toBe(true);
		expect(_isValidDelimiterArray(["-", "--", "--"])).toBe(true);
	});
});
