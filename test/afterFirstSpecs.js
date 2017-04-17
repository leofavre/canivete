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

	it(`"Should find "125" after the first 3 in 9873125.`, function() {
		expect(
			afterFirst(9873125, 3)
		).toBe("125");
	});
});
