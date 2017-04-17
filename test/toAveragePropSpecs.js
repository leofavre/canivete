import toAverageProp from "../dist/toAverageProp";

describe("toAverageProp", function() {
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

	it(`Should conclude that São Paulo has the average temperature amongst the cities in the array.`, function() {
		expect(
			mockup.reduce(toAverageProp("temperature"))
		).toBe(mockup[1]); // São Paulo
	});

	it(`Should conclude that Rio de Janeiro has the average population amongst the cities in the array.`, function() {
		expect(
			mockup.reduce(toAverageProp("demographics.population"))
		).toBe(mockup[0]); // Rio de Janeiro
	});
});
