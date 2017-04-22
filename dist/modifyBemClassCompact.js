import _parseBem from "./internal/bem/_parseBem";

const modifyBemClassCompact = (domNode, bemObj, delimiters) => _parseBem(bemObj, domNode, delimiters, false);

export default modifyBemClassCompact;
