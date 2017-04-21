import isElement from "../node_modules/lodash-es/isElement";

/**
 * Verifies if a DOM element has a CSS class.
 *
 * @category DOM
 * @param  {HTMLElement} domEl The DOM element.
 * @param  {string} str The CSS class.
 * @return {Boolean} Whether the element has the CSS class or not.
 *
 * @example
 * let oneElement = document.querySelector("a");
 * oneElement.className = "link reference";
 * 
 * console.log(hasClass(oneElement, "link"));
 * // => true
 * 
 * console.log(hasClass(oneElement, "button"));
 * // => false
 */
const hasClass = (domEl, str) => {
	if (!isElement(domEl)) {
		throw new Error("An HTMLElement is expected as parameter.");
	}

	return domEl.classList.contains(str);
};

export default hasClass;
