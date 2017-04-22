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

	it(`"Should find "👌" after the first "📋" in "😋📋👌".`, function() {
		expect(
			afterFirst("😋📋👌", "📋")
		).toBe("👌");
	});

	it(`"Should not find anything after the first "x" in "Parallelepiped".`, function() {
		expect(
			afterFirst("Parallelepiped", "x")
		).toBe(undefined);
	});

	it(`"Should not find anything if the delimiter is ommited.`, function() {
		expect(
			afterFirst("Parallelepiped")
		).toBe(undefined);
	});

	it(`Should find "Parallelepiped" after the first "" in "Parallelepiped".`, function() {
		expect(
			afterFirst("Parallelepiped", "")
		).toBe("Parallelepiped");
	});

	it(`Should throw an error if the first parameter is not a string.`, function() {
		expect(
			() => afterFirst(undefined, "")
		).toThrow();
	});
});
