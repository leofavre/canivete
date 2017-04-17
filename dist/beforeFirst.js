import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Given two strings, returns a new one formed
 * by the characters **before the first
 * occurrence** of the second string in the first.
 *
 * Returns an empty string if nothing is found.
 *
 * Note that non-string parameters will be
 * automatically converted to strings.
 *
 * @category String
 * @param  {String} str The base string.
 * @param  {String} delimiter The delimiter string.
 * @return {String}
 * @public
 *
 * @example
 * beforeFirst("parallelepiped", "le");
 * // => "paral"
 */
const beforeFirst = (str, delimiter) => _sliceOnOccurrence("before", "first", str, delimiter);

export default beforeFirst;
