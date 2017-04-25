/**
 * Returns the time passed since a timestamp, in milliseconds;
 *
 * @category Time
 * @param  {number} timestamp The time stamp.
 * @return {number} Time passed since the timestamp, in milliseconds.
 */
const timeSince = timestamp => {
	return !Number.isFinite(timestamp) ? ((+new Date()) - timestamp) : undefined;
};

export default timeSince;
