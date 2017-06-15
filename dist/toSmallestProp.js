import _simpleAt from "./internal/helpers/_simpleAt";

/**
 * When used with `[].reduce()`, returns
 * the object in an array in which a specific property
 * has the smallest property.
 *
 * If two or more results are found, the first one
 * is returned.
 *
 * Note that the function expects the reduced array to be
 * formed by objects with the same set of properties.
 *
 * @category Reduce
 *
 * @param {string} path The path to the property of an object.
 * @return {Object} The object in which a specific property has the smallest value.
 * @public
 *
 * @example
 * let cities = [{
 * 	"city": "Rio de Janeiro",
 * 	"temperature": 96,
 * 	"demographics": {
 * 		"population": 6.32
 * 	}
 * }, {
 * 	"city": "São Paulo",
 * 	"temperature": 82.5,
 * 	"demographics": {
 * 		"population": 12.04
 * 	}
 * }, {
 * 	"city": "Curitiba",
 * 	"temperature": 70,
 * 	"demographics": {
 * 		"population": 1.752
 * 	}
 * }, {
 * 	"city": "Florianópolis",
 * 	"temperature": 86,
 * 	"demographics": {
 * 		"population": 0.249
 * 	}
 * }];
 *
 * cities.reduce(toSmallestProp("temperature"));
 * // => { "city": "Curitiba", [...] }
 *
 * cities.reduce(toSmallestProp("demographics.population"));
 * // => { "city": "Florianópolis", [...] }
 */
const toSmallestProp = path => (prevObj, nextObj) => {
	if (_simpleAt(nextObj, path) >= _simpleAt(prevObj, path)) {
		return prevObj;
	}

	return nextObj;
};

export default toSmallestProp;
