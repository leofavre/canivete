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

	it(``, function() {
		expect(
			mockup.reduce(toSmallestProp("temperature"))
		).toBe(mockup[2]); // Curitiba
	});

	it(``, function() {
		expect(
			mockup.reduce(toSmallestProp("demographics.population"))
		).toBe(mockup[3]); // Florianópolis
	});
});
