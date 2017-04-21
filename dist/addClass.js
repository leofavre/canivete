import _addClassBase from "./internal/dom/_addClassBase";
import _domElementsAsArray from "./internal/dom/_domElementsAsArray";

const addClass = (domEls, str) => _domElementsAsArray(domEls).forEach(domEl => _addClassBase(domEl, str));

export default addClass;
