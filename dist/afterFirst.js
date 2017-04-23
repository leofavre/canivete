import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Returns the string formed by the characters **after
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
 * afterFirst("parallelepiped", "le");
 * // => "lepiped"
 */
const afterFirst = (str, delimiter) => _sliceOnOccurrence("after", "first", str, delimiter);

export default afterFirst;
