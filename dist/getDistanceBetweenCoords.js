import toSum from "./toSum";
import _throwErrorIf from "./internal/validation/_throwErrorIf";

/**
 * Calculates and returns the distance between two points,
 * given their cartesian coordinates, represented, each one,
 * by an array of numbers.
 *
 * For example, the point in a plane A(x, y) should be passed
 * to the function as `[x, y]`. Likewise, the point in
 * 3D space A(x, y, z) should be passed as `[x, y, z]`.
 *
 * The function deals with cartesian coordinates in
 * [n-dimensional spaces](https://en.wikipedia.org/wiki/Euclidean_distance#n_dimensions).
 *
 * @category Geometry
 * @param {Array.<number>} coordA An array representing a cartesian coordinate.
 * @param {Array.<number>} coordB An array representing a cartesian coordinate.
 * @return {number} The distance between the two cartesian coordinates.
 *
 * @example
 * getDistanceBetweenCoords([0, 0], [3, 4]);
 * // => 5
 *
 * getDistanceBetweenCoords([2, 1], [5, 5]);
 * // => 5
 *
 * getDistanceBetweenCoords([2, 1, 8], [5, 5, 0]);
 * // => 9.433981132056603
 *
 * getDistanceBetweenCoords([2], [5]);
 * // => 3
 */
const getDistanceBetweenCoords = (coordA, coordB) => {
	let areParamsValid = [coordA, coordB]
		.every(coord => Array.isArray(coord) &&
			coord.every(Number.isFinite) &&
			coord.length === coordA.length);

	_throwErrorIf(!areParamsValid, "Two arrays of numbers with the same length, representing cartesian coordinates, are expected as parameters.");

	return Math.sqrt(coordA
		.map((coord, index) => Math.pow(coord - coordB[index], 2))
		.reduce(toSum));
};

export default getDistanceBetweenCoords;