import toLargestProp from "../dist/toLargestProp";

describe("toLargestProp", function() {
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
			mockup.reduce(toLargestProp("temperature"))
		).toBe(mockup[0]); // Rio de Janeiro
	});

	it(``, function() {
		expect(
			mockup.reduce(toLargestProp("demographics.population"))
		).toBe(mockup[1]); // São Paulo
	});
});
