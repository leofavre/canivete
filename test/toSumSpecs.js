import toSum from "../dist/toSum";

describe("toSum", function() {
	it(`Should return the sum of all items in an array when used as a parameter for Array.prototype.reduce().`, function() {
		expect(
			[3, 5, 7, 9].reduce(toSum())
		).toBe(24);
	});

	it(`Should not try to treat non-numeric values.`, function() {
		expect(
			[4, 8, 16, undefined, "level42"].reduce(toSum())
		).toBe("NaNlevel42");

		expect(
			[undefined, "level42"].reduce(toSum())
		).toBe("undefinedlevel42");

		expect(
			[undefined].reduce(toSum())
		).toBe(undefined);
	});
});
