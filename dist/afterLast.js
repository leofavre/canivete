import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Given two strings, returns a new one formed
 * by the characters **after the last
 * occurrence** of the second string in the first.
 *
 * Returns an empty string if nothing is found.
 *
 * Note that non-string parameters will be converted
 * to string, which can lead to unexpected results.
 *
 * @category String
 * @param  {String} str The base string.
 * @param  {String} delimiter The string to be found.
 * @return {String}
 * @public
 *
 * @example
 * afterLast("parallelepiped", "le");
 * // => "piped"
 */
const afterLast = (str, delimiter) => _sliceOnOccurrence("after", "last", str, delimiter);

export default afterLast;
