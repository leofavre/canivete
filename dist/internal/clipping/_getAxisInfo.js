import _getAxisStartProp from "./_getAxisStartProp";
import _getAxisEndProp from "./_getAxisEndProp";

function _getAxisInfo(domCoords, maskCoords, isHorizontal) {
	let startProp        = _getAxisStartProp(isHorizontal),
		endProp          = _getAxisEndProp(isHorizontal);

	let domStart         = domCoords[startProp],
		domEnd           = domCoords[endProp],
		maskStart        = maskCoords[startProp],
		maskEnd          = maskCoords[endProp];

	let startBeforeStart = domStart <= maskStart,
		startAfterStart  = domStart >= maskStart,
		startBeforeEnd   = domStart <= maskEnd,
		startAfterEnd    = domStart >= maskEnd;

	let endBeforeStart   = domEnd <= maskStart,
		endAfterStart    = domEnd >= maskStart,
		endBeforeEnd     = domEnd <= maskEnd,
		endAfterEnd      = domEnd >= maskEnd;

	let isOffBefore      = startBeforeStart && endBeforeStart,
		isOffAfter       = startAfterEnd && endAfterEnd,
		isContained      = startAfterStart && endBeforeEnd,
		isContainer      = startBeforeStart && endAfterEnd,
		isClippedBefore  = !isOffBefore && !isContained && (startBeforeStart && endBeforeEnd && endAfterStart),
		isClippedAfter   = !isOffAfter && !isContained && (startAfterStart && startBeforeEnd && endAfterEnd);

	return {
		isOffBefore,
		isOffAfter,
		isContained,
		isContainer,
		isClippedBefore,
		isClippedAfter
	};
}

export default _getAxisInfo;
