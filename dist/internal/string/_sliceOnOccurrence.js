function _sliceOnOccurrence(slice, position, delimiter, str) {
	let index = (delimiter === "") ? -1 : (position === "first") ? str.indexOf(delimiter) : str.lastIndexOf(delimiter);
	return (slice === "before") ? (index > -1) ? str.substr(0, index) : "" : (index > -1) ? str.substr(index + delimiter.length) : "";
}

export default _sliceOnOccurrence;
