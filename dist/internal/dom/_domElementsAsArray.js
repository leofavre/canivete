import isElement from "lodash-es/isElement";
import _throwErrorIf from "../common/_throwErrorIf";

const _domElementsAsArray = arg => {
	let result = arg;

	if (arg == null) {
		return [];
	}

	if (isElement(arg)) {
		result = [arg];
	}
	else if (arg != null && (typeof arg.length === "number" || typeof arg.size === "number")) {
		result = Array.from(arg);
	}

	_throwErrorIf(!Array.isArray(result) || result.some(item => !isElement(item)), `One or many HTMLElements are expected as parameter.`);

	return result;
};

export default _domElementsAsArray;
