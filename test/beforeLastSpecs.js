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
		).toBe("");
	});

	it(`"Should find "987" before the last 3 in 9873125.`, function() {
		expect(
			beforeLast(9873125, 3)
		).toBe("987");
	});
});
