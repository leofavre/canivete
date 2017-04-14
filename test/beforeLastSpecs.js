import beforeLast from "../dist/beforeLast";

describe("beforeLast", function() {
	it(`Should find "P" before the last "a" in "Parallelepiped".`, function() {
		expect(
			beforeLast("Parallelepiped", "a")
		).toBe("Par");
	});

	it(`Should find "Parall" before the last "e" in "Parallelepiped".`, function() {
		expect(
			beforeLast("Parallelepiped", "e")
		).toBe("Parallelepip");
	});

	it(`"Should find "Paral" before the last "le" in "Parallelepiped".`, function() {
		expect(
			beforeLast("Parallelepiped", "le")
		).toBe("Paralle");
	});

	it(`"Should not find anything before the last "P" in "Parallelepiped".`, function() {
		expect(
			beforeLast("Parallelepiped", "P")
		).toBe("");
	});

	it(`"Should not find anything before the last "x" in "Parallelepiped".`, function() {
		expect(
			beforeLast("Parallelepiped", "x")
		).toBe("");
	});

	it(`"Should return undefined if two strings are not passed as parameters.`, function() {
		expect(
			beforeLast()
		).toBe(undefined);

		expect(
			beforeLast("Parallelepiped")
		).toBe(undefined);

		expect(
			beforeLast(6215, 15)
		).toBe(undefined);
	});
});
