import toAverage from "../dist/toAverage";

describe("toAverage", function() {
	it(`Should return the average of all items in an array when used with Array.prototype.reduce().`, function() {
		expect(
			[3, 5, 7, 9].reduce(toAverage())
		).toBe(6);

		expect(
			[-10, 10].reduce(toAverage())
		).toBe(0);
	});

	it("Should function without parentheses.", function() {
		expect(
			[3, 5, 7, 9].reduce(toAverage)
		).toBe(6);

		expect(
			[-10, 10].reduce(toAverage)
		).toBe(0);
	});
});
