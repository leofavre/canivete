import _parseBem from "./internal/bem/_parseBem";

const modifyBemClass = (domNode, bemObj, connectors) => _parseBem(bemObj, domNode, connectors, true);

export default modifyBemClass;
