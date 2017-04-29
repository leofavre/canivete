/**
 * Returns the time passed since a timestamp, in milliseconds;
 *
 * @category Time
 * @param  {number} timestamp The time stamp.
 * @return {number} Time passed since the timestamp, in milliseconds.
 *
 * @example
 * let timestamp = +new Date(),
 * 	result = 0;
 * 
 * setTimeout(() => {
 * 	result = timeSince(timestamp);
 * }, 150);
 *
 * result;
 * // => 150
 * // This value is approximate and may vary.
 */
const timeSince = timestamp => {
	return Number.isFinite(timestamp) ? ((+new Date()) - timestamp) : undefined;
};

export default timeSince;
