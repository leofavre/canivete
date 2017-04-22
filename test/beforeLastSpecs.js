import beforeLast from "../dist/beforeLast";

describe("beforeLast", function() {
	it(`Should find "Par" before the last "a" in "Parallelepiped".`, function() {
		expect(
			beforeLast("Parallelepiped", "a")
		).toBe("Par");
	});

	it(`Should find "Parallelepip" before the last "e" in "Parallelepiped".`, function() {
		expect(
			beforeLast("Parallelepiped", "e")
		).toBe("Parallelepip");
	});

	it(`"Should find "Paralle" before the last "le" in "Parallelepiped".`, function() {
		expect(
			beforeLast("Parallelepiped", "le")
		).toBe("Paralle");
	});

	it(`"Should not find anything before the last "P" in "Parallelepiped".`, function() {
		expect(
			beforeLast("Parallelepiped", "P")
		).toBe("");
	});

	it(`"Should find "😋" before the last "📋" in "😋📋👌".`, function() {
		expect(
			beforeLast("😋📋👌", "📋")
		).toBe("😋");
	});

	it(`"Should not find anything before the last "x" in "Parallelepiped".`, function() {
		expect(
			beforeLast("Parallelepiped", "x")
		).toBe(undefined);
	});

	it(`"Should not find anything if the delimiter is ommited.`, function() {
		expect(
			beforeLast("Parallelepiped")
		).toBe(undefined);
	});

	it(`Should find "Parallelepiped" before the last "" in "Parallelepiped".`, function() {
		expect(
			beforeLast("Parallelepiped", "")
		).toBe("Parallelepiped");
	});

	it(`Should throw an error if the first parameter is not a string.`, function() {
		expect(
			() => beforeLast(undefined, "")
		).toThrow();
	});
});
