import isString from "../../../node_modules/lodash-es/isString";

const _sliceOnOccurrence = (type, position, str, delimiter) => {
	if (!isString(str)) {
		throw new Error("A string is expected as the first parameter.");
	}

	let index = (position === "first") ? str.indexOf(delimiter) : str.lastIndexOf(delimiter);

	if (index === -1) {
		return undefined;
	}

	return (type === "before") ? str.substr(0, index) : str.substr(index + delimiter.length);
};

export default _sliceOnOccurrence;
