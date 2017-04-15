import _isNumber from "./internal/number/_isNumber";
import toSum from "./toSum";

/**
 * Used as a parameter for `Array.prototype.reduce()`,
 * this function will return the average of all the
 * items in an array.
 *
 * Non-numeric parameters will be discarded.
 *
 * @category Reduce
 * @param {number} prevNum
 * @param {number} nextNum
 * @returns {number}
 *
 * @example
 * [3, 5, 7, 9].reduce(toAverage);
 * // => 6
 */
const toAverage = (prevNum, nextNum, index, arr) => {
	let isLastItem = (index !== arr.length - 1);
	let sumNumeric = (numA, numB) => [numA, numB].reduce(toSum);
	return (isLastItem) ? sumNumeric(prevNum, nextNum) : sumNumeric(prevNum, nextNum) / arr.filter(_isNumber).length;
};

export default toAverage;
