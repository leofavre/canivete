import _parseBemEntityWithFunc from "./_parseBemEntityWithFunc";
import _parseModifierProp from "./_parseModifierProp";

const _parseModifier = (...args) => _parseBemEntityWithFunc(_parseModifierProp, ...args);

export default _parseModifier;
