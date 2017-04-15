import _isString from "./_isString";

function _sliceOnOccurrence(slice, position, str, delimiter) {
	if (!_isString(str) || !_isString(delimiter)) {
		return;
	}

	let index = (delimiter === "") ? -1 : (position === "first") ? str.indexOf(delimiter) : str.lastIndexOf(delimiter);
	return (slice === "before") ? (index > -1) ? str.substr(0, index) : "" : (index > -1) ? str.substr(index + delimiter.length) : "";
}

export default _sliceOnOccurrence;
