import isElement from "lodash-es/isElement";

const _isElementOrDocumentOrWindow = arg => isElement(arg) || arg === document || arg === window;

export default _isElementOrDocumentOrWindow;
