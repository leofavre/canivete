import isString from "lodash-es/isString";
import _throwErrorIf from "../common/_throwErrorIf";

const _sliceOnOccurrence = (type, position, str, delimiter) => {
	_throwErrorIf(!isString(str), "A string is expected as the first parameter.");

	let index = (position === "first") ? str.indexOf(delimiter) : str.lastIndexOf(delimiter);

	if (index === -1) {
		return undefined;
	}

	return (type === "before") ? str.substr(0, index) : str.substr(index + delimiter.length);
};

export default _sliceOnOccurrence;
