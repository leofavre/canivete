/**
 * When used inside `Array.prototype.sort()`, sorts
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
const byAlphabeticalOrder = (...args) => {
	let func = (strA, strB) => (strA > strB) ? +1 : (strA < strB) ? -1 : 0;
	return (args.length === 0) ? func : func(...args);
};

export default byAlphabeticalOrder;
