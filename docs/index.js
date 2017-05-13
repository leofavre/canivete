import './_includes/jquery.scrollTo.min';
import './_includes/kerning.min';

Kerning.live();

$('a[href^="#"]').on('click', scrollToAnchor);

function scrollToAnchor(evt) {
	let target = getScrollTargetByName(getAnchorName(evt.target));

	if (target) {
		evt.preventDefault();

		$(".content").scrollTo(target, 600, {
			axis: "y"
		});
	}
}

function getAnchorName(el) {
	return el.href.split("#")[1];
}

function getScrollTargetByName(name) {
	let $result = $(`[id='${name}']`);

	if ($result.length === 0) {
		$result = $(`[name='${name}']`);
	}

	return $result[0];
}
