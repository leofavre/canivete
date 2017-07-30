import "./_includes/jquery.scrollTo.min";
import "./_includes/kerning.min";
import "./_includes/scrollingelement";
import getEventPath from "../dist/getEventPath";
import throttle from "lodash-es/throttle";
import debounce from "lodash-es/debounce";

const $window = $(window);
const logo = $("h1").find("span").get(0);
const navSwitch = $(".nav__switch").get(0);
const navDrawer = $(".nav__drawer").get(0);
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
	$(logo).on("click", scrollToTop);
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

function updateDrawerBehaviour() {
	let $scrollTarget = $(getScrollTarget());

	$(navSwitch).on("click", toggleDrawer);
	$scrollTarget.on("click", closeDrawerOnClickOutside);
}

function changeDrawer(func) {
	func();

	if (!isDrawerVisible()) {
		$(navDrawer).one("transitionend", moveDrawerScrollToTop);
	}
}

function toggleDrawer() {
	changeDrawer(() => {
		$(navDrawer).toggleClass("nav__drawer--off");
		$(navSwitch).toggleClass("nav__switch--off");
	});
}

function closeDrawer() {
	changeDrawer(() => {
		$(navDrawer).addClass("nav__drawer--off");
		$(navSwitch).addClass("nav__switch--off");
	});
}

function closeDrawerOnClickOutside(evt) {
	if (isEventOutsideDrawer(evt)) {
		closeDrawer();
	}
}

function isEventOutsideDrawer(evt) {
	let eventPath = getEventPath(evt);
	return !eventPath.includes(navSwitch) && !eventPath.includes(navDrawer);
}

function isDrawerVisible() {
	return !$(navDrawer).hasClass("nav__drawer--off");
}

function moveDrawerScrollToTop() {
	navDrawer.scrollTop = 0;
}

function scrollTo(position, evt) {
	let $scrollTarget = $(getScrollTarget());

	if (position != null) {
		evt.preventDefault();
		$scrollTarget.scrollTo(position, 600, {
			axis: "y"
		});
	}
}

function scrollToTop(evt) {
	scrollTo(0, evt);
}

function scrollToChapter(evt) {
	let chapter = getChapterByHash(getHash(evt.target));
	scrollTo(chapter, evt);
}

function markNav() {
	$(navButtons).removeClass("selected");

	let currentlyReadableChapter = getCurrentlyReadableChapter();

	if (currentlyReadableChapter) {
		let hash = getHash(currentlyReadableChapter);
		let markedNavButton = getNavButtonByHash(hash);
		$(markedNavButton).addClass("selected");
	}
}

function markBrowser() {
	let currentlyReadableChapter = getCurrentlyReadableChapter();

	if (history.replaceState) {
		if (currentlyReadableChapter) {
			let hash = `#${getHash(currentlyReadableChapter)}`;

			if (document.location.hash !== hash) {
				history.replaceState(null, null, hash);
			}
		}
		else {
			if (document.location.hash !== "") {
				history.replaceState(null, null, document.location.origin + document.location.pathname);
			}
		}
	}
}

updateDrawerBehaviour();
updateScrollAnchorEvents();
updateScrollBehaviour();
listenForLayoutChange();
removeNonBreakingSpacesFromTds();