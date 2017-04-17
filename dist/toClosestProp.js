import at from "../node_modules/lodash-es/at";

/**
 * When used with `Array.prototype.reduce()`, returns
 * the object in an array in which a specific property,
 * passed as parameter, has the closest value to another,
 * also passed as parameter.
 *
 * If two or more results are found, the first one
 * is returned.
 *
 * Note that this function expects the reduced array to be
 * formed by objects with the same set of properties.
 *
 * @category Reduce
 * @param {String} path The path to the property of an object.
 * @param {String} num The base value.
 * @return {Object} The object in which an specific property has the closest value to the base value.
 * @public
 *
 * @example
 * var cities = [{
 * 	city: "Rio de Janeiro",
 * 	temperature: 96,
 * 	demographics: {
 * 		population: 6.32
 * 	}
 * }, {
 * 	city: "São Paulo",
 * 	temperature: 82.5,
 * 	demographics: {
 * 		population: 12.04
 * 	}
 * }, {
 * 	city: "Curitiba",
 * 	temperature: 70,
 * 	demographics: {
 * 		population: 1.752
 * 	}
 * }, {
 * 	city: "Florianópolis",
 * 	temperature: 86,
 * 	demographics: {
 * 		population: 0.249
 * 	}
 * }];
 *
 * cities.reduce(toClosestProp("temperature", 75));
 * // => { city: "Curitiba", [...] }
 *
 * cities.reduce(toClosestProp("demographics.population", 5));
 * // => { city: "Rio de Janeiro", [...] }
 */
const toClosestProp = (path, num) => (prevObj, nextObj, index, arr) => {
	if (Math.abs(at(prevObj, path)[0] - num) <= Math.abs(at(nextObj, path)[0] - num)) {
		return prevObj;
	}
	else {
		return nextObj;
	}
};

export default toClosestProp;
