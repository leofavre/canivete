/**
 * When used with `[].reduce()`, returns
 * the sum of the values in an array.
 *
 * Note that reducing arrays with non-numeric values
 * using `toSum()` can lead to unexpected results.
 * Also, note that the parentheses can be ommited.
 *
 * @category Reduce
 *
 * @return {number} The sum of the values in an array.
 * @public
 *
 * @example
 * [3, 5, 7, 9].reduce(toSum());
 * // => 24
 *
 * [3, 5, 7, 9].reduce(toSum);
 * // => 24
 */
const toSum = (...args) => {
	let func = (prevNum, nextNum) => prevNum + nextNum;
	return (args.length === 0) ? func : func(...args);
};

export default toSum;
