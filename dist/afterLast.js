import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Given two strings, returns a new one formed
 * by the characters **after the last
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
 * afterLast("parallelepiped", "le");
 *
 * // => "piped"
 */
const afterLast = (str, separator) => _sliceOnOccurrence("after", "last", str, separator);

export default afterLast;
