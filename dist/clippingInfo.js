import _getVerticalAxisInfo from "./internal/clipping/_getVerticalAxisInfo";
import _getHorizontalAxisInfo from "./internal/clipping/_getHorizontalAxisInfo";

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
		isClippedTop             = vertAxis.isClippedBefore,
		isClippedBottom          = vertAxis.isClippedAfter,
		isClippedLeft            = horzAxis.isClippedBefore,
		isClippedRight           = horzAxis.isClippedAfter,
		isClipped                = isClippedTop || isClippedBottom || isClippedLeft || isClippedRight,
		isFullyVisible           = vertAxis.isContained && horzAxis.isContained,
		isInvisible              = isOff,
		isAsVisibleAsPossible    = (vertAxis.isContained && horzAxis.isContainer) || (vertAxis.isContainer && horzAxis.isContained),
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
