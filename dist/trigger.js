/**
 * Triggers a custom DOM event.
 *
 * @category Event
 * @param  {string} evtName The event name.
 * @param  {boolean} bubbles Whether the event should bubble or not.
 * @param  {HTMLElement} target The DOM element that triggers the event.
 * @return {CustomEvent} The custom event.
 */
function trigger(evtName, bubbles, target) {
	let evt;

	if (window.CustomEvent != null) {
		evt = document.createEvent('Event');
		evt.initEvent(evtName, bubbles, true);
	}
	else {
		evt = new CustomEvent(evtName, {
			bubbles
		});
	}

	target.dispatchEvent(evt);
}

export default trigger;
