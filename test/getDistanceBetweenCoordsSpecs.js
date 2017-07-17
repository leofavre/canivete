import getDistanceBetweenCoords from "../dist/getDistanceBetweenCoords";

describe("getDistanceBetweenCoords", function() {
	const errorMsg = "Two arrays of numbers with the same length, representing cartesian coordinates, are expected as parameters.";

	it("Should calculate de distance between two points on a surface.", function() {
		expect(getDistanceBetweenCoords([2, 1], [5, 5])).toBe(5);
	});

	it("Should calculate de distance between two points on a surface.", function() {
		expect(getDistanceBetweenCoords([0, 0], [3, 4])).toBe(5);
	});

	it("Should calculate de distance between two points on a 3D space.", function() {
		expect(getDistanceBetweenCoords([2, 1, 8], [5, 5, 8])).toBe(5);
	});

	it("Should calculate de distance between two points on a 3D space.", function() {
		expect(getDistanceBetweenCoords([2, 1, 8], [5, 5, 0])).toBe(Math.sqrt(89));
	});

	it("Should calculate de distance between two points on a 3D space.", function() {
		expect(getDistanceBetweenCoords([2, 1, 8, 0], [5, 5, 8, 2])).toBe(Math.sqrt(29));
	});

	it("Should calculate de distance between two points in a line.", function() {
		expect(getDistanceBetweenCoords([4], [8])).toBe(4);
	});

	it("Should calculate de distance between two points in a line.", function() {
		expect(getDistanceBetweenCoords([2], [5])).toBe(3);
	});

	it("Should calculate de distance between two points in a line.", function() {
		expect(getDistanceBetweenCoords([-2], [-5])).toBe(3);
	});

	it("Should ignore extra parameters, as only two are expected.", function() {
		expect(getDistanceBetweenCoords([-2], [-5], [1001])).toBe(3);
	});

	it("Should throw an error if less than two coordinates are passed as parameters.", function() {
		expect(() => getDistanceBetweenCoords()).toThrow();
	});

	it("Should throw an error if less than two coordinates are passed as parameters.", function() {
		expect(() => getDistanceBetweenCoords([2, 1])).toThrow();
	});

	it("Should throw an error if any of the coordinates is not an array.", function() {
		expect(() => getDistanceBetweenCoords([-2, 5], -5)).toThrow();
	});

	it("Should throw an error if any of the coordinates is not an array.", function() {
		expect(() => getDistanceBetweenCoords(-5, [2, 5])).toThrow();
	});

	it("Should throw an error if coordinates do not have the same length.", function() {
		expect(() => getDistanceBetweenCoords([2, 1], [5, 3, 8])).toThrow();
	});
});
