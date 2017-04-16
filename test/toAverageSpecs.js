import toAverage from "../dist/toAverage";

describe("toAverage", function() {
	it(`Should return the average of all items in an array when used as a parameter for Array.prototype.reduce().`, function() {
		expect(
			[3, 5, 7, 9].reduce(toAverage())
		).toBe(6);
	});

	it(`Should not try to treat non-numeric values.`, function() {
		expect(
			[4, 8, undefined, "level42"].reduce(toAverage())
		).toBeNaN();

		expect(
			[3, undefined, "level42"].reduce(toAverage())
		).toBeNaN();

		expect(
			[undefined].reduce(toAverage())
		).toBe(undefined);
	});
});
