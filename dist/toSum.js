import _numericOnly from "./internal/number/_numericOnly";

/**
 * Used as the parameter for `Array.prototype.reduce()`,
 * this function will return the sum of all the items
 * in an array.
 *
 * Non-numeric parameters will be converted to zero;
 *
 * @category Reduce
 * @param {number} prevNum
 * @param {number} nextNum
 * @returns {number} The sum of the numbers in an array
 *
 * @example
 * [3, 5, 7, 9].reduce(toSum);
 * // => 24
 */
const toSum = (prevNum, nextNum) => _numericOnly(prevNum) + _numericOnly(nextNum);

export default toSum;
