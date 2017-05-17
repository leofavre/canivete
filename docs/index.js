import "./_includes/jquery.scrollTo.min";
import "./_includes/kerning.min";
import "./_includes/scrollingelement";
import throttle from "lodash-es/throttle";
import debounce from "lodash-es/debounce";

const $window = $(window);
const navButtons = $(".nav").find("a").get();
const navCollapsableButtons = $(navButtons).get().filter(domEl => $(domEl).parent().is("strong"));
const chapterAnchors = $(".content").find("h2, h3 > a").get().filter(domEl => !!getHash(domEl));

function getScrollTarget() {
	return useNativeScroll() ? getScrollingElement() : $(".page__inner").get(0);
}

function getCurrentlyReadableChapter() {
	let anchorsAboveTheFold = chapterAnchors.filter(isAboveTheFold);
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

function getScrollingElement() {
	return document.scrollingElement;
};

function useNativeScroll() {
	return $("html").hasClass("mode--native-scroll");
}

function isAboveTheFold(domEl) {
	return domEl.getBoundingClientRect().top < $window.height() * 0.35;
}

function ignoreScrollNavigationEvents(...domEls) {
	$(domEls).off("scroll");
}

function listenForScrollNavigationEvents(...domEls) {
	$(domEls)
		.on("scroll", throttle(markNav, 100))
		.on("scroll", debounce(markBrowser, 350));
}

function updateScrollAnchorEvents() {
	$(`a[href^="#"]`).on("click", scrollToChapter);
}

function listenForLayoutChange() {
	$window
		.on("resize", debounce(updateScrollBehaviour, 300))
		.on("resize", debounce(markNav, 350))
		.on("resize", debounce(markBrowser, 350));
}

function removeNonBreakingSpacesFromTds() {
	$("td").each(function() {
		var $this = $(this);
		$this.html($this.html().replace(/&nbsp;/g, ''));
	});
}

function updateScrollBehaviour() {
	ignoreScrollNavigationEvents(getScrollTarget(), window);
	listenForScrollNavigationEvents(getScrollTarget(), window);
}

function scrollToChapter(evt) {
	let $scrollTarget = $(getScrollTarget()),
		chapter = getChapterByHash(getHash(evt.target));

	if (chapter) {
		evt.preventDefault();

		$scrollTarget.scrollTo(chapter, 600, {
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

	if (document.location.hash !== hash && history.replaceState) {
		history.replaceState(null, null, hash);
	}
}

updateScrollAnchorEvents();
updateScrollBehaviour();
listenForLayoutChange();
removeNonBreakingSpacesFromTds();
