import getAttr from "../dist/getAttr";

describe("getAttr", function() {
	let videoEl = document.createElement("video");
	videoEl.src = "video.mp4";
	videoEl.controls = true;

	it("Should return an attribute from a DOM element.", function() {
		expect(getAttr(videoEl, "src")).toBe("video.mp4");
	});

	it("Should return true for an attribute without a value.", function() {
		expect(getAttr(videoEl, "controls")).toBe(true);
	});

	it("Should return false for a non-existing attribute.", function() {
		expect(getAttr(videoEl, "muted")).toBe(false);
	});
});
