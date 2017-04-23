import at from "../node_modules/lodash-es/at";

/**
 * When used with `Array.prototype.reduce()`, returns
 * the object in an array in which a specific property
 * has the largest property.
 *
 * If two or more results are found, the first one
 * is returned.
 *
 * Note that this function expects the reduced array to be
 * formed by objects with the same set of properties.
 *
 * @category Reduce
 * @module  Reduce
 *
 * @param {string} path The path to the property of an object.
 * @return {Object} The object in which a specific property has the largest value.
 * @public
 *
 * @example
 * let cities = [{
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
 * cities.reduce(toLargestProp("temperature"));
 * // => { city: "Rio de Janeiro", [...] }
 *
 * cities.reduce(toLargestProp("demographics.population"));
 * // => { city: "São Paulo", [...] }
 */
const toLargestProp = path => (prevObj, nextObj) => {
	if (at(prevObj, path)[0] >= at(nextObj, path)[0]) {
		return prevObj;
	}
	else {
		return nextObj;
	};
};

export default toLargestProp;
