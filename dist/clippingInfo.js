function clippingInfo(domNode) {
	let position = domNode.getBoundingClientRect(),
		positionTop = position.top,
		positionBottom = position.bottom,
		positionLeft = position.left,
		positionRight = position.right,
		nodeWidth = domNode.clientWidth,
		nodeHeight = domNode.clientHeight,
		screenHeight = window.innerHeight,
		screenWidth = window.innerWidth;

	let area = nodeWidth * nodeHeight,
		visibleArea = Math.max(0, (Math.min(screenHeight, positionBottom) - Math.max(0, positionTop))) * Math.max(0, (Math.min(screenWidth, positionRight) - Math.max(0, positionLeft))),
		maximumVisibleArea = Math.min(screenWidth, nodeWidth) * Math.min(screenHeight, nodeHeight);

	let isOffScreenTop = positionTop + nodeHeight <= 0,
		isOffScreenBottom = positionTop >= screenHeight,
		isOffScreenLeft = positionLeft + nodeWidth <= 0,
		isOffScreenRight = positionLeft >= screenWidth,
		isOffScreen = isOffScreenTop || isOffScreenBottom || isOffScreenLeft || isOffScreenRight,
		isCroppedTop = !isOffScreen && (positionTop < 0),
		isCroppedBottom = !isOffScreen && (screenHeight - positionBottom < 0),
		isCroppedLeft = !isOffScreen && (positionLeft < 0),
		isCroppedRight = !isOffScreen && (screenWidth - positionRight < 0),
		isCropped = !isOffScreen && (isCroppedTop || isCroppedBottom || isCroppedLeft || isCroppedRight),
		isVisible = !isOffScreen && !isCroppedTop && !isCroppedBottom && !isCroppedLeft && !isCroppedRight,
		isInvisible = isOffScreen,
		isAsVisibleAsPossible = !isOffScreen && (isCroppedTop === isCroppedBottom) && (isCroppedLeft === isCroppedRight),
		isNotAsVisibleAsPossible = !isAsVisibleAsPossible,
		isPartiallyVisible = !isInvisible && !isVisible;

	return {
		area,
		maximumVisibleArea,
		visibleArea,
		isOffScreenTop,
		isOffScreenBottom,
		isOffScreenLeft,
		isOffScreenRight,
		isOffScreen,
		isCroppedTop,
		isCroppedBottom,
		isCroppedLeft,
		isCroppedRight,
		isCropped,
		isVisible,
		isInvisible,
		isAsVisibleAsPossible,
		isNotAsVisibleAsPossible,
		isPartiallyVisible
	};
}

export default clippingInfo;
