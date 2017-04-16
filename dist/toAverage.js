/**
 * Returns the average of the items in an array.
 * 
 * This function is curried so as to be used as the
 * first parameter of `Array.prototype.reduce()`.
 *
 * Note that reducing arrays with non-numeric values
 * using `toAverage()` can lead to unexpected results.
 *
 * @category Reduce
 * @return {number} The average of the items in an array
 * @public
 *
 * @example
 * [3, 5, 7, 9].reduce(toAverage());
 * // (3 + 5 + 7 + 9) / 4
 * // => 6
 */
const toAverage = () => (prevNum, nextNum, index, arr) => {
	let isLastIteration = (index === arr.length - 1);

	if (!isLastIteration) {
		return prevNum + nextNum;
	}
	else {
		return (prevNum + nextNum) / arr.length;
	}
};

export default toAverage;
