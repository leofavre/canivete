const _sliceOnOccurrence = (type, position, str, delimiter) => {
	str = `${str}`;
	delimiter = `${delimiter}`;

	let index = (delimiter === "") ? -1 : (position === "first") ? str.indexOf(delimiter) : str.lastIndexOf(delimiter);
	return (type === "before") ? (index > -1) ? str.substr(0, index) : "" : (index > -1) ? str.substr(index + delimiter.length) : "";
};

export default _sliceOnOccurrence;
