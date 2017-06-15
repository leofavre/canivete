import _recursiveSort from "./internal/sort/_recursiveSort";
import _parseSortFields from "./internal/sort/_parseSortFields";
import _throwErrorIf from "./internal/validation/_throwErrorIf";

/**
 * @typedef {Object} SortField
 * @property {string} path The path to the property of an object.
 * @property {Function} [primer] The function used to process each value before sorting.
 * @property {boolean} [reverse] Whether the result should be reversed.
 */

/**
 * When used with `[].sort()`, returns an array of
 * objects sorted by one or more criteria, passed as
 * parameters.
 *
 * Each parameter can be eitheir a path to an object
 * property, passed as a string, or an object containing
 * a path to an object property, a boolean value indicating
 * if the result should be reversed, and a function to
 * process each value before sorting.
 *
 * @category Sort
 * 
 * @param  {...(string|SortField)} ...fields The criteria used to sort the array of objects.
 * @return {Array.<Object>} The resulting array.
 *
 * @example
 * let places = [{
 * 	"name": "Ipanema",
 * 	"location": {
 * 		"city": "Rio de Janeiro",
 * 		"state": "RJ"
 * 	}
 * }, {
 * 	"name": "Pedras",
 * 	"location": {
 * 		"city": "Búzios",
 * 		"state": "RJ"
 * 	}
 * }, {
 * 	"name": "Morumbi",
 * 	"location": {
 * 		"city": "São Paulo",
 * 		"state": "SP"
 * 	}
 * }];
 *
 * places.sort(byProps("name"));
 * // Sorts places by name
 * // => [
 * // =>	{ "name": "Ipanema", [...] },
 * // =>	{ "name": "Morumbi", [...] },
 * // =>	{ "name": "Pedras", [...] }
 * // => ]
 *
 * places.sort(byProps({ "path": "name", "reverse": true });
 * // Sorts places by name in reversed order
 * // => [
 * // =>	{ "name": "Pedras", [...] },
 * // =>	{ "name": "Morumbi", [...] },
 * // =>	{ "name": "Ipanema", [...] }
 * // => ]
 *
 * places.sort(byProps("location.state", "location.city", "name"));
 * // Sorts places by state, city and name
 * // => [
 * // =>	{ "name": "Pedras", [...] },
 * // =>	{ "name": "Ipanema", [...] },
 * // =>	{ "name": "Morumbi", [...] }
 * // => ]
 *
 * places.sort(byProps({ "path": "location.state", "reverse": true }, "location.city", "name"));
 * // Sorts places by state (in reversed order), city and name
 * // => [
 * // =>	{ "name": "Morumbi", [...] },
 * // =>	{ "name": "Pedras", [...] },
 * // =>	{ "name": "Ipanema", [...] }
 * // => ]
 *
 * @example
 * let numbers = [{
 * 	"value": 35
 * }, {
 * 	"value": -20
 * }, {
 * 	"value": 3
 * }, {
 * 	"value": 0.8
 * }];
 *
 * numbers.sort(byProps("value"));
 * // Sorts numbers by value in ascending order
 * // => [{ "value": -20 }, { "value": 0.8 }, { "value": 3 }, { "value": 35 }]
 *
 * numbers.sort(byProps({ "path": "value", "primer": Math.abs }));
 * // Sorts numbers by value in ascending order but ignoring the minus sign
 * // => [{ "value": 0.8 }, { "value": 3 }, { "value": -20 }, { "value": 35 }]
 */
const byProps = (...fields) => {
	_throwErrorIf(fields.length === 0, "One or more sort criterias should be passed as parameters.");
	return _recursiveSort(_parseSortFields(fields));
};

export default byProps;
