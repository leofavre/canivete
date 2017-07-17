import getDistanceBetweenCoords from "../dist/getDistanceBetweenCoords";

describe("getDistanceBetweenCoords", function() {
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
});
