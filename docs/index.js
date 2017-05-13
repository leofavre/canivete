import './_includes/jquery.scrollTo.min';
import './_includes/kerning.min';

Kerning.live();

$('a[href^="#"]').on('click', function() {
	let target = getScrollTargetByName(getHash(this));

	if (target) {
		$(".content").scrollTo(target, 600);
	}
});

function getHash(el) {
	return el.href.split("#")[1];
}

function getScrollTargetByName(name) {
	let $result = $(`[id='${name}']`);

	if ($result.length === 0) {
		$result = $(`[name='${name}']`);
	}

	return $result[0];
}
