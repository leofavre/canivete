import _throwErrorIf from "../validation/_throwErrorIf";

const _createDomElement = htmlStr => {
	let domEl = document.createElement("div");
	domEl.innerHTML = htmlStr;

	_throwErrorIf(domEl.children.length !== 1, "A string defining a single HTMLElement, with or without children, is expected as parameter.");

	return domEl.children[0];
};

export default _createDomElement;
