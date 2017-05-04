import _getAxisStartProp from "./_getAxisStartProp";
import _getAxisEndProp from "./_getAxisEndProp";

const _getAxisInfo = (domCoords, maskCoords, isHorizontal) => {
	let startProp           = _getAxisStartProp(isHorizontal),
		endProp             = _getAxisEndProp(isHorizontal);

	let domStart            = domCoords[startProp],
		domEnd              = domCoords[endProp],
		maskStart           = maskCoords[startProp],
		maskEnd             = maskCoords[endProp];

	let startBeforeStart    = domStart <= maskStart,
		startBeforeStartExc = domStart < maskStart,
		startAfterStart     = domStart >= maskStart,
		startBeforeEnd      = domStart <= maskEnd,
		startAfterEnd       = domStart >= maskEnd;

	let endBeforeStart      = domEnd <= maskStart,
		endAfterStart       = domEnd >= maskStart,
		endBeforeEnd        = domEnd <= maskEnd,
		endAfterEnd         = domEnd >= maskEnd,
		endAfterEndExc      = domEnd > maskEnd;

	let isOffBefore         = startBeforeStart && endBeforeStart,
		isOffAfter          = startAfterEnd && endAfterEnd,
		isContained         = startAfterStart && endBeforeEnd,
		isWrapper           = startBeforeStart && endAfterEnd,
		isClippedBefore     = startBeforeStartExc && endAfterStart,
		isClippedAfter      = startBeforeEnd && endAfterEndExc;

	return {
		isOffBefore,
		isOffAfter,
		isContained,
		isWrapper,
		isClippedBefore,
		isClippedAfter
	};
};

export default _getAxisInfo;
