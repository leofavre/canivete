import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Returns the string formed by the characters **before
 * the first occurrence** of the delimiter in a base string.
 * If the delimiter is not found, the function returns `undefined`.
 *
 * @category String
 *
 * @param  {string} str The base string.
 * @param  {string} delimiter The delimiter string.
 * @return {string}
 * @public
 *
 * @example
 * beforeFirst("parallelepiped", "le");
 * // => "paral"
 */
const beforeFirst = (str, delimiter) => _sliceOnOccurrence("before", "first", str, delimiter);

export default beforeFirst;
