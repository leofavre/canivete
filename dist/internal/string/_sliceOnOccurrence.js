import _isString from "./_isString";

function _sliceOnOccurrence(slice, position, str, separator) {
	if (!_isString(str) || !_isString(separator)) {
		return;
	}

	let index = (separator === "") ? -1 : (position === "first") ? str.indexOf(separator) : str.lastIndexOf(separator);
	return (slice === "before") ? (index > -1) ? str.substr(0, index) : "" : (index > -1) ? str.substr(index + separator.length) : "";
}

export default _sliceOnOccurrence;
