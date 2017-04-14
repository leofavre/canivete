import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Given two strings, returns a new string formed
 * by the characters **previous to the last
 * occurrence** of the second string in the first.
 *
 * If nothing is not found, returns an empty string.
 *
 * Returns `undefined` if two strings are not
 * passed as parameters.
 *
 * @category String
 * @param  {string} str Base string
 * @param  {string} separator String to be found
 * @return {string}
 * @public
 *
 * @example
 * beforeLast("parallelepiped", "le");
 *
 * // => "paralle"
 */
const beforeLast = (str, separator) => _sliceOnOccurrence("before", "last", str, separator);

export default beforeLast;
