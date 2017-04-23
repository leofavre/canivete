import byAlphabeticalOrder from "../dist/byAlphabeticalOrder";

describe("byAlphabeticalOrder", function() {
	it("Should order an array by alphabetical order.", function() {
		expect(
			["Athos", "Porthos", "Aramis"].sort(byAlphabeticalOrder())
		).toEqual(["Aramis", "Athos", "Porthos"]);
	});

	it("Should function without parentheses.", function() {
		expect(
			["Athos", "Porthos", "Aramis"].sort(byAlphabeticalOrder)
		).toEqual(["Aramis", "Athos", "Porthos"]);
	});
});
