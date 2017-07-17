import getDistanceBetweenCoords from "../dist/getDistanceBetweenCoords";

describe("getDistanceBetweenCoords", function() {
	it("Should calculate de distance betwwen two points on a surface.", function() {
		expect(getDistanceBetweenCoords([2, 1], [5, 5])).toBe(5);
	});

	it("Should calculate de distance betwwen two points on a surface.", function() {
		expect(getDistanceBetweenCoords([0, 0], [3, 4])).toBe(5);
	});

	it("Should calculate de distance betwwen two points on a 3D space.", function() {
		expect(getDistanceBetweenCoords([2, 1, 8], [5, 5, 8])).toBe(5);
	});

	it("Should calculate de distance betwwen two points on a 3D space.", function() {
		expect(getDistanceBetweenCoords([2, 1, 8], [5, 5, 0])).toBe(Math.sqrt(89));
	});
});
