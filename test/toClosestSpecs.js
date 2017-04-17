import toClosest from "../dist/toClosest";

describe("toClosest", function() {
	it(`Should return the closest value to a specific number in an array when used with Array.prototype.reduce().`, function() {
		expect(
			[3, 5, 7, 9].reduce(toClosest(6))
		).toBe(5);

		expect(
			[9, 7, 5, 3].reduce(toClosest(6))
		).toBe(7);

		expect(
			[128, 17, -5, 78].reduce(toClosest(6))
		).toBe(17);

		expect(
			[128, 18, -5, 78].reduce(toClosest(6))
		).toBe(-5);

		expect(
			[3, 5, 7, 9].reduce(toClosest(-2))
		).toBe(3);
	});
});
