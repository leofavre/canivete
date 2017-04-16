const toClosest = num => (prevNum, nextNum) => {
	if (Math.abs(prevNum - num) <= Math.abs(nextNum - num)) {
		return prevNum;
	}
	else {
		return nextNum;
	}
};

export default toClosest;
