/**
 * When used with `[].reduce()`, returns
 * the closest value to the one passed as parameter.
 *
 * If two or more results are found, the first one
 * is returned.
 *
 * Note that reducing arrays with non-numeric values
 * using `toClosest()` can lead to unexpected results.
 *
 * @category Reduce
 *
 * @param {number} num The base value.
 * @return {number} The value, from an array, closest to the base value.
 * @public
 *
 * @example
 * [3, 5, 7, 9].reduce(toClosest(6));
 * // => 5
 *
 * [3, 5, 7, 9].reduce(toClosest(-2));
 * // => 3
 */
const toClosest = num => (prevNum, nextNum) => {
	if (Math.abs(prevNum - num) <= Math.abs(nextNum - num)) {
		return prevNum;
	}
	else {
		return nextNum;
	}
};

export default toClosest;
