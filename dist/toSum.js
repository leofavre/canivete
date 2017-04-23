/**
 * When used with `Array.prototype.reduce()`, returns
 * the sum of the values in an array.
 *
 * Note that reducing arrays with non-numeric values
 * using `toSum()` can lead to unexpected results.
 *
 * @category Reduce
 *
 * @return {number} The sum of the values in an array.
 * @public
 *
 * @example
 * [3, 5, 7, 9].reduce(toSum());
 * // => 24
 */
const toSum = () => (prevNum, nextNum) => prevNum + nextNum;

export default toSum;
