import toAverage from "./toAverage";
import _simpleAt from "./internal/helpers/_simpleAt";

/**
 * When used with `[].reduce()`, returns
 * the object in an array in which a specific property,
 * passed as parameter, has the closest value to the average.
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
 * @return {Object} The object in which an specific property has the closest value to the average.
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
 * // average "temperature": 83.625
 * // average "population": 5.09025
 *
 * cities.reduce(toAverageProp("temperature"));
 * // => { "city": "São Paulo", [...] }
 *
 * cities.reduce(toAverageProp("demographics.population"));
 * // => { "city": "Rio de Janeiro", [...] }
 */
const toAverageProp = path => {
	let average;

	return (prevObj, nextObj, index, arr) => {
		average = average || arr.map(obj => _simpleAt(obj, path)).reduce(toAverage());

		if (Math.abs(_simpleAt(prevObj, path) - average) <= Math.abs(_simpleAt(nextObj, path) - average)) {
			return prevObj;
		}
		else {
			return nextObj;
		}
	};
};

export default toAverageProp;
