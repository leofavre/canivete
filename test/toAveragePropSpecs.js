import toAverageProp from "../dist/toAverageProp";

describe("toAverageProp", function() {
	var mockup = [{
		city: "Rio de Janeiro",
		temperature: 36
	}, {
		city: "São Paulo",
		temperature: 28
	}, {
		city: "Curitiba",
		temperature: 21
	}, {
		city: "Florianópolis",
		temperature: 30
	}];

	it(``, function() {
		expect(
			mockup.reduce(toAverageProp("temperature"))
		).toBe(mockup[1]); // São Paulo
	});
});
