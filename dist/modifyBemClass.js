import _parseBem from "./internal/bem/_parseBem";

const modifyBemClass = (domNode, bemObj, delimiterArr) => _parseBem(bemObj, domNode, delimiterArr, true);

export default modifyBemClass;
