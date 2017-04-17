import toSmallestProp from "../dist/toSmallestProp";

describe("toSmallestProp", function() {
	var mockup = [{
		city: "Rio de Janeiro",
		temperature: 96,
		demographics: {
			population: 6.32
		}
	}, {
		city: "São Paulo",
		temperature: 82.5,
		demographics: {
			population: 12.04
		}
	}, {
		city: "Curitiba",
		temperature: 70,
		demographics: {
			population: 1.752
		}
	}, {
		city: "Florianópolis",
		temperature: 86,
		demographics: {
			population: 0.249
		}
	}];

	it(`Should conclude that Curitiba has the smallest temperature amongst the cities in the array.`, function() {
		expect(
			mockup.reduce(toSmallestProp("temperature"))
		).toBe(mockup[2]); // Curitiba
	});

	it(`Should conclude that Florianópolis has the smallest temperature amongst the cities in the array.`, function() {
		expect(
			mockup.reduce(toSmallestProp("demographics.population"))
		).toBe(mockup[3]); // Florianópolis
	});

	var test = [{
		n: "a",
		p: 2
	}, {
		n: "b",
		p: 8
	}, {
		n: "c",
		p: 6
	}, {
		n: "d",
		p: 2
	}, {
		n: "e",
		p: 8
	}];

	it(`Should return the first result when two or more are found.`, function() {
		expect(
			test.reduce(toSmallestProp("p"))
		).toBe(test[0]);
	});
});
