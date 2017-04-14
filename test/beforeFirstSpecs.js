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

	it(`"Should not find anything before the first "x" in "Parallelepiped".`, function() {
		expect(
			beforeFirst("Parallelepiped", "x")
		).toBe("");
	});

	it(`"Should return undefined if two strings are not passed as parameters.`, function() {
		expect(
			beforeFirst()
		).toBe(undefined);

		expect(
			beforeFirst("Parallelepiped")
		).toBe(undefined);

		expect(
			beforeFirst(6215, 15)
		).toBe(undefined);
	});
});
