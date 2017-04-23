/**
 * When used with `[].reduce()`, returns
 * the average of the values in an array.
 *
 * Note that reducing arrays with non-numeric values
 * using `toAverage()` can lead to unexpected results.
 * Also, note that the parentheses can be ommited.
 *
 * @category Reduce
 *
 * @return {number} The average of the values in an array.
 * @public
 *
 * @example
 * [3, 5, 7, 9].reduce(toAverage());
 * // => 6
 *
 * [3, 5, 7, 9].reduce(toAverage);
 * // => 6
 */
const toAverage = (...args) => {
	let func = (prevNum, nextNum, index, arr) => {
		let isLastIteration = (index === arr.length - 1);
		return (!isLastIteration) ? (prevNum + nextNum) : (prevNum + nextNum) / arr.length;
	};

	return (args.length === 0) ? func : func(...args);
};

export default toAverage;
