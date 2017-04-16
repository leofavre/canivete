/**
 * Returns the sum of the items in an array.
 * 
 * This function is curried so as to be used as the
 * first parameter of `Array.prototype.reduce()`.
 *
 * Note that reducing arrays with non-numeric values
 * using `toSum()` can lead to unexpected results.
 *
 * @category Reduce
 * @return {number} The sum of the numbers in an array
 * @public
 *
 * @example
 * [3, 5, 7, 9].reduce(toSum());
 * // => 24
 */
const toSum = () => (prevNum, nextNum) => prevNum + nextNum;

export default toSum;
