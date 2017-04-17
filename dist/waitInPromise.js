import _isNumber from "./internal/number/_isNumber";

/**
 * Delays the chaining of a Promise by a specified
 * time in milliseconds.
 *
 * This function is curried so as to be used inside
 * the `.then()` method, passing along the resolved
 * value of the previous Promise step to the next.
 *
 * If a non-numeric parameter is passed, the Promise
 * resolves without delay, skipping the internal
 * `setTimeout()`.
 * 
 * @category Promise
 * @param  {Number} delay The delay in milliseconds.
 * @return {Promise} When fullfiled, returns the resolved value from the previous step.
 * @public
 *
 * @example
 * Promise.resolve("waiting")
 * 	.then(waitInPromise(500))
 * 	.then(console.log);
 *
 * // => "waiting"
 * // shown after 500ms
 */
function waitInPromise(delay) {
	return arg => {
		if (_isNumber(delay) && delay > 0) {
			return new Promise(resolve => {
				setTimeout(() => resolve(arg), delay);
			});
		}
		return Promise.resolve(arg);
	};
}

export default waitInPromise;
