import _defaultComparator from "./internal/sort/_defaultComparator";

/**
 * When used with `[].sort()`, sorts
 * the array in ascending alphabetical order.
 *
 * Note that the parentheses can be ommited.
 *
 * @category Sort
 * 
 * @return {Array} The array in ascending alphabetical order.
 *
 * @example
 * let musqueteers = ["Athos", "Porthos", "Aramis"];
 * 
 * musqueteers.sort(byAlphabeticalOrder());
 * // => ["Aramis", "Athos", "Porthos"]
 *
 * musqueteers.sort(byAlphabeticalOrder);
 * // => ["Aramis", "Athos", "Porthos"]
 */
const byAlphabeticalOrder = (...args) =>
	(args.length === 0) ? _defaultComparator : _defaultComparator(...args);

export default byAlphabeticalOrder;
