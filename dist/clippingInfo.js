import _getVerticalAxisInfo from "./internal/clipping/_getVerticalAxisInfo";
import _getHorizontalAxisInfo from "./internal/clipping/_getHorizontalAxisInfo";

/**
 * Given two DOM Elements, a child and a mask, returns an
 * object with position and clipping information of the
 * child in relation to the mask.
 *
 * @category DOM
 * @param  {HTMLElement} domEl The child DOM Element.
 * @param  {HTMLElement} [maskEl = document.body] The mask DOM Element.
 * @return {Object}
 */
function clippingInfo(domEl, maskEl = document.body) {
	let domCoords  = domEl.getBoundingClientRect(),
		maskCoords = maskEl.getBoundingClientRect();

	let vertAxis   = _getVerticalAxisInfo(domCoords, maskCoords),
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
		isPartiallyVisible       = !isInvisible && !isFullyVisible;

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
}

export default clippingInfo;
