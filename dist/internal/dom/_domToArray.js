import _isElement from "../helpers/_isElement";
import _isElementOrDocumentOrWindow from "./_isElementOrDocumentOrWindow";
import _throwErrorIf from "../validation/_throwErrorIf";

const _domElementsToArray = (arg, allowDocumentAndWindow = false) => {
	let result = arg,
		isDom = allowDocumentAndWindow ? _isElementOrDocumentOrWindow : _isElement,
		errorMsg = allowDocumentAndWindow ? "One or more HTMLElements are expected as the first parameter." : "One or more HTMLElements, including document or window, are expected as the first parameter.";

	if (arg == null) {
		return [];
	}

	if (isDom(arg)) {
		result = [arg];
	}
	else if (arg != null && (typeof arg.length === "number" || typeof arg.size === "number")) {
		result = Array.from(arg);
	}

	_throwErrorIf(!Array.isArray(result) || result.some(item => !isDom(item)), errorMsg);

	return result;
};

export default _domElementsToArray;
