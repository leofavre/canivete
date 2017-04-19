function clippingInfo(domEl, wrapEl = document.body) {

}

function getVerticalInfo(domEl, wrapEl) {
	return getInfo(domEl, wrapEl, false);
}

function getHorizontalInfo(domEl, wrapEl) {
	return getInfo(domEl, wrapEl, true);
}

function getInfo(domEl, wrapEl, isHorizontal) {
	let domCoords = domEl.getBoundingClientRect(),
		wrapCoords = wrapEl.getBoundingClientRect(),
		startProp = getInfoStartProp(isHorizontal),
		endProp = getInfoEndProp(isHorizontal);

	let domStart = domCoords[startProp],
		domEnd = domCoords[endProp],
		wrapStart = wrapCoords[startProp],
		wrapEnd = wrapCoords[endProp];

	let startBeforeStart = domStart < wrapStart,
		startAfterStart = !startBeforeStart,
		startBeforeEnd = domStart < wrapEnd,
		startAfterEnd = !startBeforeEnd;

	let endBeforeStart = domEnd < wrapStart,
		endAfterStart = !endBeforeStart,
		endBeforeEnd = domEnd < wrapEnd,
		endAfterEnd = !endBeforeEnd;

	let outsideStart = startBeforeStart && endBeforeStart,
		outsideEnd = startAfterEnd && endAfterEnd,
		intra = startAfterStart && endBeforeEnd,
		extra = startBeforeStart && endAfterEnd,
		clipStart = startBeforeStart && endBeforeEnd && endAfterStart,
		clipEnd = startAfterStart && startBeforeEnd && endAfterEnd;

	return {
		outsideStart,
		outsideEnd,
		intra,
		extra,
		clipStart,
		clipEnd
	};
}

function getInfoStartProp(isHorizontal) {
	return isHorizontal ? "left" : "top";
}

function getInfoEndProp(isHorizontal) {
	return isHorizontal ? "right" : "bottom";
}
