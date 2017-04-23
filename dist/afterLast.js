import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Returns the string formed by the characters **after
 * the last occurrence** of the delimiter in a base string.
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
 * afterLast("parallelepiped", "le");
 * // => "piped"
 */
const afterLast = (str, delimiter) => _sliceOnOccurrence("after", "last", str, delimiter);

export default afterLast;
