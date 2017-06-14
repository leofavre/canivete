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

	it("Should function with accented latin characters usign native localeCompare.", function() {
		expect(
			["Áureo", "Árvore", "Ética", "Elástico", "Arte", "Entusiasta"].sort(byAlphabeticalOrder)
		).toEqual(["Arte", "Árvore", "Áureo", "Elástico", "Entusiasta", "Ética"]);
	});

	it("Should function with accented latin characters (upper or lower case) usign native localeCompare.", function() {
		expect(
			["áureo", "Árvore", "Ética", "Elástico", "arte", "entusiasta"].sort(byAlphabeticalOrder)
		).toEqual(["arte", "Árvore", "áureo", "Elástico", "entusiasta", "Ética"]);
	});

	it("Should not fail with an array with a single element.", function() {
		expect(
			["laser"].sort(byAlphabeticalOrder)
		).toEqual(["laser"]);
	});
});
