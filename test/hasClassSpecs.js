import hasClass from "../dist/hasClass";

describe("hasClass", function() {
	it("Should verify if an HTMLElement has a CSS class.", function() {
		let oneElement = document.createElement("a");
		oneElement.className = "link reference";

		expect(hasClass(oneElement, "link")).toBe(true);
		expect(hasClass(oneElement, "button")).toBe(false);
	});
});
