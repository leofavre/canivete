import _parseBem from "./internal/bem/_parseBem";

const modifyBemClass = (domNode, bemObj, delimiters) => _parseBem(bemObj, domNode, delimiters, true);

export default modifyBemClass;
