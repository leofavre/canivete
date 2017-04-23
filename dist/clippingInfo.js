import _getCoords from "./internal/clipping/_getCoords";
import _getVerticalAxisInfo from "./internal/clipping/_getVerticalAxisInfo";
import _getHorizontalAxisInfo from "./internal/clipping/_getHorizontalAxisInfo";

/**
 * @typedef {Object} clippingObject
 * @property {boolean} isOffTop Above and off the mask.
 * @property {boolean} isOffBottom Below and off the mask.
 * @property {boolean} isOffLeft On the left and off the mask.
 * @property {boolean} isOffRight On the right and off the mask.
 * @property {boolean} isOff Off the mask.
 * @property {boolean} isClippedTop Above and intersecting with the mask.
 * @property {boolean} isClippedBottom Below and intersecting with the mask.
 * @property {boolean} isClippedLeft On the left and intersecting with the mask.
 * @property {boolean} isClippedRight On the right and intersecting with the mask.
 * @property {boolean} isClipped Element intersects with the mask.
 * @property {boolean} isFullyVisible Fully visible inside the mask.
 * @property {boolean} isPartiallyVisible Alias for `isClipped`.
 * @property {boolean} isInvisible Alias for `isOff`.
 * @property {boolean} isAsVisibleAsPossible As visible as possible (child bigger than the mask).
 * @property {boolean} isNotAsVisibleAsPossible Not as visible as possible (child bigger than the mask).
 */

/**
 * Given a DOM element, returns an object with position
 * and clipping information relative to a mask, defined
 * by the second parameter, or to the viewport, if the
 * second parameter is omitted.
 *
 * The mask can be either a DOM element or an object
 * containing numeric values for "top", "bottom",
 * "left" and "right" properties, like a
 * [DOMRect](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect).
 *
 * @category DOM
 *
 * @param  {HTMLElement} domEl The DOM element.
 * @param  {(HTMLElement|Object)} [maskDef] The mask definition.
 * @return {clippingObject} Position and clipping information relative to a mask (see table below).
 *
 * @example
 * let domEl = document.createElement("div");
 *
 * domEl.style.position = "fixed";
 * domEl.style.top = "-50px";
 * domEl.style.left = "-50px";
 * domEl.style.width = "200px";
 * domEl.style.height = "200px";
 *
 * document.body.appendChild(domEl);
 *
 * let info = clippingInfo(domEl);
 *
 * console.log(info.isClippedTop);
 * // => true
 *
 * console.log(info.isClippedLeft);
 * // => true
 *
 * console.log(info.isFullyVisible);
 * // => false
 *
 * console.log(info.isPartiallyVisible);
 * // => true
 *
 * console.log(info.isInvisible);
 * // => false
 */
const clippingInfo = (domEl, maskDef) => {
	let domCoords  = _getCoords(domEl, true);
	let maskCoords = _getCoords(maskDef, false),
		vertAxis   = _getVerticalAxisInfo(domCoords, maskCoords),
		horzAxis   = _getHorizontalAxisInfo(domCoords, maskCoords);

	let isOffTop                 = vertAxis.isOffBefore,
		isOffBottom              = vertAxis.isOffAfter,
		isOffLeft                = horzAxis.isOffBefore,
		isOffRight               = horzAxis.isOffAfter,
		isOff                    = isOffTop || isOffBottom || isOffLeft || isOffRight,
		isClippedTop             = !isOff && (vertAxis.isClippedBefore),
		isClippedBottom          = !isOff && (vertAxis.isClippedAfter),
		isClippedLeft            = !isOff && (horzAxis.isClippedBefore),
		isClippedRight           = !isOff && (horzAxis.isClippedAfter),
		isClipped                = isClippedTop || isClippedBottom || isClippedLeft || isClippedRight,
		isFullyVisible           = vertAxis.isContained && horzAxis.isContained,
		isInvisible              = isOff,
		isAsVisibleAsPossible    = isFullyVisible || (vertAxis.isWrapper && horzAxis.isWrapper) || (vertAxis.isContained && horzAxis.isWrapper) || (vertAxis.isWrapper && horzAxis.isContained),
		isNotAsVisibleAsPossible = isInvisible || !isAsVisibleAsPossible,
		isPartiallyVisible       = isClipped;

	return {
		isOffTop,
		isOffBottom,
		isOffLeft,
		isOffRight,
		isOff,
		isClippedTop,
		isClippedBottom,
		isClippedLeft,
		isClippedRight,
		isClipped,
		isFullyVisible,
		isPartiallyVisible,
		isInvisible,
		isAsVisibleAsPossible,
		isNotAsVisibleAsPossible
	};
};

export default clippingInfo;
