import _createDomElement from "../dist/internal/dom/_createDomElement";
import getAttr from "../dist/getAttr";

describe("getAttr", function() {
	it("Should return a boolean attribute from a DOM element written in HTML5 syntax.", function() {
		let inputElement = _createDomElement('<input type="checkbox" checked>');
		expect(getAttr(inputElement, "checked")).toBe(true);
	});

	it("Should return a boolean attribute from a DOM element written in HTML4 syntax.", function() {
		let inputElement = _createDomElement('<input type="checkbox" checked="checked"/>');
		expect(getAttr(inputElement, "checked")).toBe(true);
	});

	it("Should return an attribute from a DOM element.", function() {
		let linkElement = _createDomElement('<a href="#test">');
		expect(getAttr(linkElement, "href")).toBe("#test");
	});

	it("Should return true for an attribute without a value.", function() {
		let videoElement = _createDomElement('<video controls>');
		expect(getAttr(videoElement, "controls")).toBe(true);
	});

	it("Should return false for a non-existing attribute.", function() {
		let videoElement = _createDomElement('<video controls>');
		expect(getAttr(videoElement, "muted")).toBe(false);
	});
});
