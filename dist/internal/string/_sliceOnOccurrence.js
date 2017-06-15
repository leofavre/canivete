import _isString from "../helpers/_isString";
import _throwErrorIf from "../validation/_throwErrorIf";

const _sliceOnOccurrence = (type, position, str, delimiter) => {
	_throwErrorIf(!_isString(str), "A string is expected as the first parameter.");

	let index = (position === "first") ? str.indexOf(delimiter) : str.lastIndexOf(delimiter);

	if (index === -1) {
		return undefined;
	}

	return (type === "before") ? str.substr(0, index) : str.substr(index + delimiter.length);
};

export default _sliceOnOccurrence;
