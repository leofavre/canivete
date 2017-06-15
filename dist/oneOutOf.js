import _random from "./internal/helpers/_random";
import _throwErrorIf from "./internal/validation/_throwErrorIf";

/**
 * Returns `true` approximately one out of `num` times,
 * randomly.
 *
 * @category Random
 * 
 * @param  {number} num A number greater than zero.
 * @return {boolean} Returns `true` approximately one out of `num` times.
 *
 * @example
 * oneOutOf(2);
 * // => true
 *
 * oneOutOf(2);
 * // => false
 */
const oneOutOf = num => {
	_throwErrorIf((!Number.isFinite(num) || num < 1), "A number greater than 1 is expected as parameter.");
	return (num === 1) ? true : _random(1, num) === num;
};

export default oneOutOf;
