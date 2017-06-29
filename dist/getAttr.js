import _isBooleanAttribute from "./internal/dom/_isBooleanAttribute";

/**
 * Gets a DOM element attribute using native
 * [`Element.getAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute),
 * except that the presence of an attribute without
 * a value will return `true` instead of an empty string,
 * and the absence will return `false`. The function also
 * deals with boolean values using old HTML4 syntax,
 * like `<option selected="selected">`.
 *
 * @category DOM
 * 
 * @param  {HTMLElement} domEl The DOM element.
 * @param  {string} attrName The attribute name.
 * @return {(string|Boolean)} The attribute value.
 *
 * @example
 * // HTML5 syntax
 * let inputElement = createDomElement('<input type="checkbox" checked>');
 *
 * getAttr(inputElement, "checked");
 * // => true
 *
 * @example
 * // HTML4 syntax
 * let inputElement = createDomElement('<input type="checkbox" checked="checked"/>');
 *
 * getAttr(inputElement, "checked");
 * // => true
 *
 * @example
 * let videoElement = createDomElement('<video src="video.mp4" controls>');
 *
 * getAttr(videoElement, "src");
 * // => "video.mp4"
 * 
 * getAttr(videoElement, "controls");
 * // => true
 * 
 * getAttr(videoElement, "muted");
 * // => false
 */
const getAttr = (domEl, attrName) => {
	let value = domEl.getAttribute(attrName);
	
	if (_isBooleanAttribute(attrName) && attrName === value) {
		value = true;
	}

	value = (value === "") ? true : (value == null) ? false : value;
	return value;
};

export default getAttr;
