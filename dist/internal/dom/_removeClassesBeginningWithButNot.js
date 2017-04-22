import _removeClassesBeginningWithButNotBase from "./_removeClassesBeginningWithButNotBase";
import _domElementsAsArray from "./_domElementsAsArray";

const _removeClassesBeginningWithButNot = (domEls, str) => {
	_domElementsAsArray(domEls).forEach(domEl => _removeClassesBeginningWithButNotBase(domEl, str));
};

export default _removeClassesBeginningWithButNot;
