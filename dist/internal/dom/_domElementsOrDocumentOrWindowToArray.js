import _domToArray from "./_domToArray";

const _domElementsOrDocumentOrWindowToArray = arg => _domToArray(arg, true);

export default _domElementsOrDocumentOrWindowToArray;
