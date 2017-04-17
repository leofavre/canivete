/**
 * When used as the first parameter of
 * `Array.prototype.reduce()`, returns the closest
 * value to the base value, specified as a parameter.
 *
 * If two or more values are as close to the base
 * value as each other, the first that was found
 * will prevail.
 *
 * Note that reducing arrays with non-numeric values
 * using `toClosest()` can lead to unexpected results.
 *
 * @category Reduce
 * @param {number} num The base value.
 * @return {number} The value in an array closest to the base value.
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
