import isString from "lodash-es/isString";

const _isValidDelimiterArray = delimiters => {
	return Array.isArray(delimiters) && delimiters.length === 3 && delimiters.every(delimiter => isString(delimiter) && delimiter !== "");
};

export default _isValidDelimiterArray;
