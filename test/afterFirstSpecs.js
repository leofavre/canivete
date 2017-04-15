import afterFirst from "../dist/afterFirst";

describe("afterFirst", function() {
	it(`Should find "rallelepiped" after the first "a" in "Parallelepiped".`, function() {
		expect(
			afterFirst("Parallelepiped", "a")
		).toBe("rallelepiped");
	});

	it(`Should find "lepiped" after the first "e" in "Parallelepiped".`, function() {
		expect(
			afterFirst("Parallelepiped", "e")
		).toBe("lepiped");
	});

	it(`"Should find "lepiped" after the first "le" in "Parallelepiped".`, function() {
		expect(
			afterFirst("Parallelepiped", "le")
		).toBe("lepiped");
	});

	it(`"Should find "arallelepiped" after the first "P" in "Parallelepiped".`, function() {
		expect(
			afterFirst("Parallelepiped", "P")
		).toBe("arallelepiped");
	});

	it(`"Should not find anything after the first "x" in "Parallelepiped".`, function() {
		expect(
			afterFirst("Parallelepiped", "x")
		).toBe("");
	});

	it(`"Should find "👌" after the first "📋" in "😋📋👌".`, function() {
		expect(
			afterFirst("😋📋👌", "📋")
		).toBe("👌");
	});

	it(`"Should return undefined if two strings are not passed as parameters.`, function() {
		expect(
			afterFirst()
		).toBe(undefined);

		expect(
			afterFirst("Parallelepiped")
		).toBe(undefined);

		expect(
			afterFirst(6215, 15)
		).toBe(undefined);
	});
});
