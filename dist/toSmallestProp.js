import at from "../node_modules/lodash-es/at";

const toLargestProp = path => (prevObj, nextObj) => {
	if (at(nextObj, path)[0] >= at(prevObj, path)[0]) {
		return prevObj;
	}
	else {
		return nextObj;
	};
};

export default toLargestProp;
