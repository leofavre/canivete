import toClosestProp from "../dist/toClosestProp";

describe("toClosestProp", function() {
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

	it(`Should conclude that Curitiba has the closest temperature to 75 amongst the cities in the array.`, function() {
		expect(
			mockup.reduce(toClosestProp("temperature", 75))
		).toBe(mockup[2]); // Curitiba
	});

	it(`Should conclude that Rio de Janeiro has the closest population to 5 amongst the cities in the array.`, function() {
		expect(
			mockup.reduce(toClosestProp("demographics.population", 5))
		).toBe(mockup[0]); // Rio de Janeiro
	});

	var test = [{
		n: "a",
		p: 2
	}, {
		n: "b",
		p: 4
	}, {
		n: "c",
		p: 6
	}, {
		n: "d",
		p: 2
	}, {
		n: "e",
		p: 4
	}];

	it(`Should return the first result when two or more are found.`, function() {
		expect(
			test.reduce(toClosestProp("p", 3))
		).toBe(test[0]);
	});
});
