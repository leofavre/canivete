import _getCoordsFromElement from "./internal/geometry/_getCoordsFromElement";
import _getCoordsFromElementOrObjectOrWindow from "./internal/geometry/_getCoordsFromElementOrObjectOrWindow";
import _getVerticalAxisInfo from "./internal/geometry/_getVerticalAxisInfo";
import _getHorizontalAxisInfo from "./internal/geometry/_getHorizontalAxisInfo";

/**
 * @typedef {Object} ClippingObject
 * @property {boolean} isOffTop Above and off the mask.
 * @property {boolean} isOffBottom Below and off the mask.
 * @property {boolean} isOffLeft On the left and off the mask.
 * @property {boolean} isOffRight On the right and off the mask.
 * @property {boolean} isOff Off the mask.
 * @property {boolean} isClippedTop Above and intersecting with the mask.
 * @property {boolean} isClippedBottom Below and intersecting with the mask.
 * @property {boolean} isClippedLeft On the left and intersecting with the mask.
 * @property {boolean} isClippedRight On the right and intersecting with the mask.
 * @property {boolean} isClipped Intersecting with the mask.
 * @property {boolean} isFullyVisible Fully visible inside the mask.
 * @property {boolean} isPartiallyVisible Alias for `isClipped`.
 * @property {boolean} isInvisible Alias for `isOff`.
 * @property {boolean} isAsVisibleAsPossible As visible as possible (the element is taller or wider than the mask).
 * @property {boolean} isNotAsVisibleAsPossible Not as visible as possible (the element is taller or wider than the mask).
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
 * [`DOMRect`](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect).
 *
 * @category Geometry
 *
 * @param  {HTMLElement} domEl The DOM element.
 * @param  {(HTMLElement|Object)} [maskDef] The mask definition.
 * @return {ClippingObject} Position and clipping information relative to a mask (see table below).
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
 * let info = getClippingInfo(domEl);
 *
 * info.isClippedTop;
 * // => true
 *
 * info.isClippedLeft;
 * // => true
 *
 * info.isFullyVisible;
 * // => false
 *
 * info.isPartiallyVisible;
 * // => true
 *
 * info.isInvisible;
 * // => false
 */
const getClippingInfo = (domEl, maskDef) => {
	let domCoords  = _getCoordsFromElement(domEl);
	let maskCoords = _getCoordsFromElementOrObjectOrWindow(maskDef),
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

export default getClippingInfo;
