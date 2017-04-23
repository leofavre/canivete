/**
 * When used inside `Array.prototype.sort()`, sorts
 * the array in ascending alphabetical order.
 *
 * @category Sort
 * 
 * @return {Array} The array in ascending alphabetical order.
 *
 * @example
 * let names = ["Athos", "Porthos", "Aramis"];
 * names.sort(byAlphabeticalOrder());
 * // => ["Aramis", "Athos", "Porthos"]
 */
const byAlphabeticalOrder = () => (strA, strB) => (strA > strB) ? +1 : (strA < strB) ? -1 : 0;

export default byAlphabeticalOrder;
