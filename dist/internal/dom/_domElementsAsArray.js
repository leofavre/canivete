import isElement from "../../../node_modules/lodash-es/isElement";

const _domElementsAsArray = arg => {
	let result = arg;

	if (isElement(arg)) {
		result = [arg];
	}
	else if (arg != null && (typeof arg.length === "number" || typeof arg.size === "number")) {
		result = Array.from(arg);
	}

	if (!Array.isArray(result) || result.some(item => !isElement(item))) {
		throw new Error(`A single HTMLElement, or a group of HTMLElements, are expected as parameter.`);
	}

	return result;
};

export default _domElementsAsArray;
