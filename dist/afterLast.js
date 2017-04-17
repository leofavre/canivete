import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Given two strings, returns a new one formed
 * by the characters **after the last
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
 * afterLast("parallelepiped", "le");
 *
 * // => "piped"
 */
const afterLast = (str, delimiter) => _sliceOnOccurrence("after", "last", str, delimiter);

export default afterLast;
