import _isString from "../helpers/_isString";

const _isValidDelimiterArray = delimiters => {
	return Array.isArray(delimiters) && delimiters.length === 3 && delimiters.every(delimiter => _isString(delimiter) && delimiter !== "");
};

export default _isValidDelimiterArray;
