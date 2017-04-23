import oneOutOf from "../dist/oneOutOf";

function testRandomness(num) {
	let expectedPositive = 1 / num;
	let expectedNegative = 1 - expectedPositive;
	let expectedRatio = expectedPositive / expectedNegative;
	let expectedRatioPercent = 100 * expectedRatio;

	let positives = 0;
	let negatives = 0;

	for (let i = 0; i < 1000000; i++) {
		if (oneOutOf(num)) {
			positives++;
		}
		else {
			negatives++;
		}
	}

	let actualRatio = positives / negatives;

	return it(`Should return true approximately ${expectedRatioPercent}% of times with oneOutOf(${num}).`, function() {
		expect(actualRatio < (expectedRatio + 0.01) && actualRatio > (expectedRatio - 0.01)).toBe(true);
	});
}

describe("oneOutOf", function() {
	testRandomness(2);
	testRandomness(5);
	testRandomness(10);
	testRandomness(25);
	testRandomness(100);
	testRandomness(250000);

	it("Should return true when 1 is used as parameter.", function() {
		expect(oneOutOf(1)).toBe(true);
	});

	it("Should throw an error is the parameter is not a number greater than 1.", function() {
		expect(() => oneOutOf()).toThrow();
		expect(() => oneOutOf(0)).toThrow();
		expect(() => oneOutOf(-45)).toThrow();
		expect(() => oneOutOf("25")).toThrow();
		expect(() => oneOutOf([])).toThrow();
		expect(() => oneOutOf({})).toThrow();
	});
});
