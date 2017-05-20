import _reactToEvent from "./internal/event/_reactToEvent";

/**
 * Adds one or more event listeners to one or more DOM elements at once.
 * The function is a wrapper for
 * [`Element.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
 * that accepts a space-separated event names string and a group
 * of target DOM elements.
 *
 * @category Event
 * @param {(Window|HTMLDocument|HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or more DOM elements, including `document` and `window`.
 * @param {string} eventStr The event names string.
 * @param {Function} callback The function to be exectuted when the event is dispatched.
 * @param {Boolean} [useCapture = false] The event phase to be listened for.
 *
 * @example
 *
 * let oneElement = document.querySelector("a");
 * let manyElements = document.querySelectorAll("a");
 * 
 * listen(oneElement, "click", reactToClick, true);
 * listen(manyElements, "click", reactToClick);
 * listen(window, "load resize", reactToLoadAndResize);
 */
const listen = (domEls, eventStr, callback, useCapture = false) => _reactToEvent("addEventListener", domEls, eventStr, callback, useCapture);

export default listen;
