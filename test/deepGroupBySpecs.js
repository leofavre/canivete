import deepGroupBy from "../dist/deepGroupBy.js";

describe("deepGroupBy", function() {
	const stores = [{
		name: "Iguatemi",
		city: "Campinas",
		state: "SP"
	}, {
		name: "Jardins",
		city: "São Paulo",
		state: "SP"
	}, {
		name: "Iguatemi",
		city: "São Paulo",
		state: "SP"
	}, {
		name: "Pedras",
		city: "Búzios",
		state: "RJ"
	}, {
		name: "Ipanema",
		city: "Rio de Janeiro",
		state: "RJ"
	}, {
		name: "Leblon",
		city: "Rio de Janeiro",
		state: "RJ"
	}, {
		name: "ParkShopping",
		city: "Brasília",
		state: "DF"
	}];

	const getNamesFirstCharacter = item => item.name.slice(0, 1);
	const getCityName = item => item.city;
	const getStateName = item => item.state;

	it("Should group stores by the first letter of their names.", function() {
		expect(deepGroupBy(stores, getNamesFirstCharacter)).toEqual({
			"I": [{
				name: "Iguatemi",
				city: "Campinas",
				state: "SP"
			}, {
				name: "Iguatemi",
				city: "São Paulo",
				state: "SP"
			}, {
				name: "Ipanema",
				city: "Rio de Janeiro",
				state: "RJ"
			}],
			"J": [{
				name: "Jardins",
				city: "São Paulo",
				state: "SP"
			}],
			"P": [{
				name: "Pedras",
				city: "Búzios",
				state: "RJ"
			}, {
				name: "ParkShopping",
				city: "Brasília",
				state: "DF"
			}],
			"L": [{
				name: "Leblon",
				city: "Rio de Janeiro",
				state: "RJ"
			}]
		});
	});

	it("Should group stores by state and city.", function() {
		expect(deepGroupBy(stores, getStateName, getCityName)).toEqual({
			"SP": {
				"Campinas": [{
					name: "Iguatemi",
					city: "Campinas",
					state: "SP"
				}],
				"São Paulo": [{
					name: "Jardins",
					city: "São Paulo",
					state: "SP"
				}, {
					name: "Iguatemi",
					city: "São Paulo",
					state: "SP"
				}]
			},
			"RJ": {
				"Búzios": [{
					name: "Pedras",
					city: "Búzios",
					state: "RJ"
				}],
				"Rio de Janeiro": [{
					name: "Ipanema",
					city: "Rio de Janeiro",
					state: "RJ"
				}, {
					name: "Leblon",
					city: "Rio de Janeiro",
					state: "RJ"
				}]
			},
			"DF": {
				"Brasília": [{
					name: "ParkShopping",
					city: "Brasília",
					state: "DF"
				}]
			}
		});
	});

	it("Should group stores by the first letter of their names and the name of the city.", function() {
		expect(deepGroupBy(stores, getNamesFirstCharacter, getCityName)).toEqual({
			"I": {
				"Campinas": [{
					name: "Iguatemi",
					city: "Campinas",
					state: "SP"
				}],
				"São Paulo": [{
					name: "Iguatemi",
					city: "São Paulo",
					state: "SP"
				}],
				"Rio de Janeiro": [{
					name: "Ipanema",
					city: "Rio de Janeiro",
					state: "RJ"
				}]
			},
			"J": {
				"São Paulo": [{
					name: "Jardins",
					city: "São Paulo",
					state: "SP"
				}]
			},
			"P": {
				"Búzios": [{
					name: "Pedras",
					city: "Búzios",
					state: "RJ"
				}],
				"Brasília": [{
					name: "ParkShopping",
					city: "Brasília",
					state: "DF"
				}]
			},
			"L": {
				"Rio de Janeiro": [{
					name: "Leblon",
					city: "Rio de Janeiro",
					state: "RJ"
				}]
			}
		});
	});
});
