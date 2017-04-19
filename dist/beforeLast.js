import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Given two strings, returns a new one formed
 * by the characters **before the last
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
 * beforeLast("parallelepiped", "le");
 * // => "paralle"
 */
const beforeLast = (str, delimiter) => _sliceOnOccurrence("before", "last", str, delimiter);

export default beforeLast;
