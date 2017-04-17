import afterLast from "../dist/afterLast";

describe("afterLast", function() {
	it(`Should find "llelepiped" after the last "a" in "Parallelepiped".`, function() {
		expect(
			afterLast("Parallelepiped", "a")
		).toBe("llelepiped");
	});

	it(`Should find "d" after the last "e" in "Parallelepiped".`, function() {
		expect(
			afterLast("Parallelepiped", "e")
		).toBe("d");
	});

	it(`"Should find "piped" after the last "le" in "Parallelepiped".`, function() {
		expect(
			afterLast("Parallelepiped", "le")
		).toBe("piped");
	});

	it(`"Should find "arallelepiped" after the last "P" in "Parallelepiped".`, function() {
		expect(
			afterLast("Parallelepiped", "P")
		).toBe("arallelepiped");
	});

	it(`"Should find "👌" after the last "📋" in "😋📋👌".`, function() {
		expect(
			afterLast("😋📋👌", "📋")
		).toBe("👌");
	});

	it(`"Should not find anything after the last "x" in "Parallelepiped".`, function() {
		expect(
			afterLast("Parallelepiped", "x")
		).toBe("");
	});
});
