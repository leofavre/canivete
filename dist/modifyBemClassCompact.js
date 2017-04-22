import _parseBem from "./internal/bem/_parseBem";

const modifyBemClassCompact = (domNode, bemObj, connectors) => _parseBem(bemObj, domNode, connectors, false);

export default modifyBemClassCompact;
