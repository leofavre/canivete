/**
 * Returns the first item in an array the has the
 * closest value to another number, specified as
 * parameter.
 * 
 * This function is curried so as to be used as the
 * first parameter of `Array.prototype.reduce()`.
 *
 * Note that reducing arrays with non-numeric values
 * using `toClosest()` can lead to unexpected results.
 *
 * @category Reduce
 * @param {number} num The value to be compared with
 * @return {number} The item in an array that is closest to a number
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
