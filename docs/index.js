import "./_includes/jquery.scrollTo.min";
import "./_includes/kerning.min";
import throttle from "lodash-es/throttle";
import debounce from "lodash-es/debounce";

const navButtons = $(".nav").find("a").get();
const navCollapsableButtons = $(navButtons).get().filter(domEl => $(domEl).parent().is("strong"));
const navTargets = $(".content").find("h2, h3 > a").get().filter(domEl => !!getHash(domEl));
const $content = $(".content");
const $window = $(window);

function scrollToChapter(evt) {
	let chapter = getChapterByHash(getHash(evt.target));

	if (chapter) {
		evt.preventDefault();

		$content.scrollTo(chapter, 600, {
			axis: "y"
		});
	}
}

function markNav() {
	let hash = getHash(getCurrentlyReadableChapter());
	let markedNavButton = getNavButtonByHash(hash);
	$(navButtons).removeClass("selected");
	$(markedNavButton).addClass("selected");
}

function markBrowser() {
	let hash = `#${getHash(getCurrentlyReadableChapter())}`;
	let memoPosition = $content.scrollTop();

	if (document.location.hash !== hash) {
		document.location.hash = hash;
	}

	if ($content.scrollTop() !== memoPosition) {
		$content.scrollTop(memoPosition);
	}

	$content.scrollLeft(0); // for IE.
}

function getCurrentlyReadableChapter() {
	let anchorsAboveTheFold = navTargets.filter(titleEl => titleEl.getBoundingClientRect().top < $window.height() * 0.5);
	return getLastItem(anchorsAboveTheFold);
}

function getHash(domEl) {
	return domEl.href ? domEl.href.split("#")[1] : "" ||
		domEl.getAttribute("id") ||
		domEl.getAttribute("name");
}

function getAutoHeight(domEl) {
	$domEl = $(domEl);

	let memoCSS = $domEl.attr("style");

	$domEl.css({
		transition: "all 0s",
		height: "auto"
	});

	let memoHeight = $domEl.height();
	$domEl.attr("style", memoCSS || "");
	return memoHeight;
}

function getChapterByHash(hash) {
	return $(`[id="${hash}"], [name="${hash}"]`)[0];
}

function getNavButtonByHash(hash) {
	return $(navButtons).filter(`a[href$="#${hash}"]`)[0];
}

function getLastItem(arr) {
	return arr[arr.length - 1];
}

$(`a[href^="#"]`).on("click", scrollToChapter);

$content
	.on("scroll", throttle(markNav, 30))
	.on("scroll", debounce(markBrowser, 300));

$window
	.on("resize", throttle(markNav, 30))
	.on("resize", debounce(markBrowser, 300));
