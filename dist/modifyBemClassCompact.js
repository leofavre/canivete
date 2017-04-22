import _parseBem from "./internal/bem/_parseBem";

const modifyBemClassCompact = (domNode, bemObj, delimiterArr) => _parseBem(bemObj, domNode, delimiterArr, false);

export default modifyBemClassCompact;
