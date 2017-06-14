/**
 * Delays the chaining of a promise by a specified
 * time in milliseconds.
 *
 * The function is curried so as to be used inside
 * the `.then()` method, passing along the resolved
 * value from the previous promise step to the next.
 *
 * Note that if a non-numeric parameter is passed,
 * the promise resolves without delay, skipping the
 * internal `setTimeout()`.
 * 
 * @category Promise
 *
 * @param  {number} delay The delay in milliseconds.
 * @return {Promise} When fulfilled, returns the resolved value from the previous step.
 * @public
 *
 * @example
 * Promise.resolve("waiting")
 * 	.then(waitInPromise(1000))
 * 	.then(doSomethingAfterOneSecond);
 */
const waitInPromise = delay => arg =>
	(Number.isFinite(delay) && delay > 0) ?
	new Promise(resolve => setTimeout(() => resolve(arg), delay)) :
	Promise.resolve(arg);

export default waitInPromise;
