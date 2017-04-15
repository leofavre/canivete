import toSum from "../dist/toSum";

describe("toSum", function() {
	it(`Should return the sum of all items in an array when used as a parameter for Array.prototype.reduce().`, function() {
		expect(
			[3, 5, 7, 9].reduce(toSum)
		).toBe(24);
	});

	it(`Should convert non-numeric values to zero.`, function() {
		expect(
			[4, 8, 16, undefined, "level42"].reduce(toSum)
		).toBe(28);

		expect(
			[undefined, "level42"].reduce(toSum)
		).toBe(0);
	});
});
