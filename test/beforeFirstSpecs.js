import beforeFirst from "../dist/beforeFirst";

describe("beforeFirst", function() {
	it(`Should find "P" before the first "a" in "Parallelepiped".`, function() {
		expect(
			beforeFirst("Parallelepiped", "a")
		).toBe("P");
	});

	it(`Should find "Parall" before the first "e" in "Parallelepiped".`, function() {
		expect(
			beforeFirst("Parallelepiped", "e")
		).toBe("Parall");
	});

	it(`"Should find "Paral" before the first "le" in "Parallelepiped".`, function() {
		expect(
			beforeFirst("Parallelepiped", "le")
		).toBe("Paral");
	});

	it(`"Should not find anything before the first "P" in "Parallelepiped".`, function() {
		expect(
			beforeFirst("Parallelepiped", "P")
		).toBe("");
	});

	it(`"Should find "😋" before the first "📋" in "😋📋👌".`, function() {
		expect(
			beforeFirst("😋📋👌", "📋")
		).toBe("😋");
	});

	it(`"Should not find anything before the first "x" in "Parallelepiped".`, function() {
		expect(
			beforeFirst("Parallelepiped", "x")
		).toBe(undefined);
	});

	it(`"Should not find anything if the delimiter is ommited.`, function() {
		expect(
			beforeFirst("Parallelepiped")
		).toBe(undefined);
	});

	it(`Should find "" before the first "" in "Parallelepiped".`, function() {
		expect(
			beforeFirst("Parallelepiped", "")
		).toBe("");
	});

	it(`Should throw an error if the first parameter is not a string.`, function() {
		expect(
			() => beforeFirst(undefined, "")
		).toThrow();
	});
});
