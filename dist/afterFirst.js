import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Given two strings, returns a new one formed
 * by the characters **after the first
 * occurrence** of the second string in the first.
 *
 * Returns an empty string if nothing is found.
 *
 * Note that non-string parameters will be
 * automatically converted to strings.
 *
 * @category String
 * @param  {string} str The base string.
 * @param  {string} delimiter The delimiter string.
 * @return {string}
 * @public
 *
 * @example
 * afterFirst("parallelepiped", "le");
 * // => "lepiped"
 */
const afterFirst = (str, delimiter) => _sliceOnOccurrence("after", "first", str, delimiter);

export default afterFirst;
