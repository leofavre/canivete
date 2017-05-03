import _isValidModifierObject from "../dist/internal/bem/_isValidModifierObject";

describe("_isValidModifierObject", function() {
	it(`"Should return false if passed anything other than a BEM modifier object.`, function() {
		expect(_isValidModifierObject(0)).toBe(false);
		expect(_isValidModifierObject("")).toBe(false);
		expect(_isValidModifierObject("__ -- -")).toBe(false);
		expect(_isValidModifierObject([])).toBe(false);
		expect(_isValidModifierObject()).toBe(false);

		expect(_isValidModifierObject({
			"active": null
		})).toBe(false);

		expect(_isValidModifierObject({
			"active": undefined
		})).toBe(false);
	});

	it(`"Should return true if passed a valid BEM modifier object: with boolean, string or number as properties`, function() {
		expect(_isValidModifierObject({})).toBe(true);

		expect(_isValidModifierObject({
			"active": true
		})).toBe(true);

		expect(_isValidModifierObject({
			"active": false,
			"level": 42
		})).toBe(true);

		expect(_isValidModifierObject({
			"active": 42
		})).toBe(true);

		expect(_isValidModifierObject({
			"active": "42"
		})).toBe(true);
	});
});
