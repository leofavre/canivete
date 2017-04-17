import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Given two strings, returns a new one formed
 * by the characters **before the first
 * occurrence** of the second string in the first.
 *
 * Returns an empty string if nothing is found.
 *
 * Note that non-string parameters will be converted
 * to string.
 *
 * @category String
 * @param  {string} str Base string
 * @param  {string} delimiter String to be found
 * @return {string}
 * @public
 *
 * @example
 * beforeFirst("parallelepiped", "le");
 *
 * // => "paral"
 */
const beforeFirst = (str, delimiter) => _sliceOnOccurrence("before", "first", str, delimiter);

export default beforeFirst;
