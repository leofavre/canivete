import _isValidBemObject from "../dist/internal/bem/_isValidBemObject";

describe("_isValidBemObject", function() {
	it(`"Should return false if passed anything other than a BEM modifier object.`, function() {
		expect(_isValidBemObject(0)).toBe(false);
		expect(_isValidBemObject("")).toBe(false);
		expect(_isValidBemObject("__ -- -")).toBe(false);
		expect(_isValidBemObject([])).toBe(false);
		expect(_isValidBemObject()).toBe(false);

		expect(_isValidBemObject({
			"menu": null
		})).toBe(false);

		expect(_isValidBemObject({
			"menu": undefined
		})).toBe(false);

		expect(_isValidBemObject({
			"menu": 42
		})).toBe(false);

		expect(_isValidBemObject({
			"menu": false
		})).toBe(false);

		expect(_isValidBemObject({
			"menu": true
		})).toBe(false);

		expect(_isValidBemObject({
			"menu": []
		})).toBe(false);
	});

	it(`"Should return true if passed a valid BEM modifier object: with boolean, string or number as properties`, function() {
		expect(_isValidBemObject({})).toBe(true);

		expect(_isValidBemObject({
			"menu": {}
		})).toBe(true);

		expect(_isValidBemObject({
			"menu": {
				"active": true
			}
		})).toBe(true);

		expect(_isValidBemObject({
			"menu": {
				"active": true,
				"level": "42",
				"test": 24
			},
			"button": {
				"active": true
			}
		})).toBe(true);
	});
});
