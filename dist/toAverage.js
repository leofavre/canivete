/**
 * Used as the parameter for `Array.prototype.reduce()`,
 * this function will return the average of all the
 * items in an array.
 *
 * Note that non-numeric values passed to the function
 * are not treated and can lead to unexpected results.
 *
 * @category Reduce
 * @param {number} prevNum
 * @param {number} nextNum
 * @param {number} index
 * @param {Array} arr
 * @returns {number} The average of the items in an array
 * @public
 *
 * @example
 * [3, 5, 7, 9].reduce(toAverage);
 * // (3 + 5 + 7 + 9) / 4
 * // => 6
 */
const toAverage = (prevNum, nextNum, index, arr) => {
	let isLastIteration = (index === arr.length - 1);

	if (!isLastIteration) {
		return prevNum + nextNum;
	}
	else {
		return (prevNum + nextNum) / arr.length;
	}
};

export default toAverage;
