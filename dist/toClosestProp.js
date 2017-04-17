import at from "../node_modules/lodash-es/at";

const toClosestProp = (path, num) => (prevObj, nextObj, index, arr) => {
	if (Math.abs(at(prevObj, path)[0] - num) <= Math.abs(at(nextObj, path)[0] - num)) {
		return prevObj;
	}
	else {
		return nextObj;
	};
};

export default toClosestProp;
