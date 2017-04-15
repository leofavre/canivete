import _isNumber from "./internal/number/_isNumber";
import _numericOnly from "./internal/number/_numericOnly";

/**
 * Used as the parameter for `Array.prototype.reduce()`,
 * this function will return the average of all the
 * items in an array.
 *
 * Non-numeric parameters will be discarded.
 *
 * @category Reduce
 * @returns {number} The average of the numbers in an array
 *
 * @example
 * [3, 5, 7, 9].reduce(toAverage);
 * // => 6
 */
const toAverage = (prevNum, nextNum, index, arr) => {
	let isLastItem = (index === arr.length - 1);
	let sumNumeric = (numA, numB) => _numericOnly(numA) + _numericOnly(numB);

	if (!isLastItem) {
		return sumNumeric(prevNum, nextNum);
	}
	else {
		return sumNumeric(prevNum, nextNum) / arr.filter(_isNumber).length;
	}
};

export default toAverage;
