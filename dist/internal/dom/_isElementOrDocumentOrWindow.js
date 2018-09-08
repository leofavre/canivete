import _isElement from "../helpers/_isElement.js";

const _isElementOrDocumentOrWindow = arg => _isElement(arg) || arg === document || arg === window;

export default _isElementOrDocumentOrWindow;
