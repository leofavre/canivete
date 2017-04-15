import _isNumber from "./internal/number/_isNumber";

/**
 * Used as a parameter for `Array.prototype.reduce()`,
 * this function will return the sum of all the items
 * in an array.
 *
 * Non-numeric parameters will be converted to zero;
 *
 * @category Reduce
 * @param {number} prevNum
 * @param {number} nextNum
 * @returns {number}
 *
 * @example
 * [3, 5, 7, 9].reduce(toSum);
 * // => 24
 */
const toSum = (prevNum, nextNum) => {
	let numericOnly = arg => _isNumber(arg) ? arg : 0;
	return numericOnly(prevNum) + numericOnly(nextNum);
};

export default toSum;
