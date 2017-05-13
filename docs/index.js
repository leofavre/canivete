import "./_includes/jquery.scrollTo.min";
import "./_includes/kerning.min";
import toClosestProp from "../dist/toClosestProp";
import throttle from "lodash-es/throttle";

const navButtons = $(".nav").find("a").get();
const navTargets = $(".content").find("h2, h3 > a").get().filter(domEl => !!getHash(domEl));

function scrollToChapter(evt) {
	let chapter = getChapterByHash(getHash(evt.target));

	if (chapter) {
		evt.preventDefault();

		$(".content").scrollTo(chapter, 600, {
			axis: "y"
		});
	}
}

function markNavAndBrowser() {
	let hash = getHash(getCurrentlyReadableChapter());
	markNav(hash);
	markBrowser(hash);
}

function markNav(hash) {
	let markedNavButton = getNavButtonByHash(hash);
	$(navButtons).removeClass("selected");
	$(markedNavButton).addClass("selected");
}

function markBrowser(hash) {
	let newHash = `#${hash}`;

	if (document.location.hash !== newHash) {
		safeChangeHash(newHash);
	}
}

function safeChangeHash(hash) {
	let memoPosition = $(".content").scrollTop();

	setTimeout(function() {
		let currentPosition = $(".content").scrollTop(),
			scrollHasStopped = (currentPosition === memoPosition);

		if (scrollHasStopped) {
			document.location.hash = hash;
			$(".content").scrollTop(memoPosition);
		}
	}, 100);
}

function getCurrentlyReadableChapter() {
	let anchorsAboveTheFold = navTargets.filter(titleEl => titleEl.getBoundingClientRect().top < $(window).height() * 0.5);
	return getLastItem(anchorsAboveTheFold);
}

function getHash(domEl) {
	return domEl.href ? domEl.href.split("#")[1] : "" ||
		domEl.getAttribute("id") ||
		domEl.getAttribute("name");
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
$(".content").on("scroll", throttle(markNavAndBrowser, 30));
$("window").on("load resize", throttle(markNavAndBrowser, 290));
