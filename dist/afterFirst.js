import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Given two strings, returns a new one formed
 * by the characters **after the first
 * occurrence** of the second string in the first.
 *
 * Returns an empty string if nothing is found.
 *
 * Returns `undefined` if the parameters passed to
 * the function are not two strings.
 *
 * @category String
 * @param  {string} str Base string
 * @param  {string} separator String to be found
 * @return {string}
 * @public
 *
 * @example
 * afterFirst("parallelepiped", "le");
 *
 * // => "lepiped"
 */
const afterFirst = (str, separator) => _sliceOnOccurrence("after", "first", str, separator);

export default afterFirst;
