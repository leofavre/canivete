import toSum from "../dist/toSum";

describe("toSum", function() {
	it(`Should return the sum of all items in an array when used as a parameter for Array.prototype.reduce().`, function() {
		expect(
			[3, 5, 7, 9].reduce(toSum())
		).toBe(24);

		expect(
			[-10, 10].reduce(toSum())
		).toBe(0);
	});
});
