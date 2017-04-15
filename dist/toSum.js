/**
 * Used as the parameter for `Array.prototype.reduce()`,
 * this function returns the sum of all the items
 * in an array.
 *
 * Note that non-numeric values passed to the function
 * are not treated and can lead to unexpected results.
 *
 * @category Reduce
 * @param {number} prevNum
 * @param {number} nextNum
 * @returns {number} The sum of the numbers in an array
 * @public
 *
 * @example
 * [3, 5, 7, 9].reduce(toSum);
 * // => 24
 */
const toSum = (prevNum, nextNum) => prevNum + nextNum;

export default toSum;
