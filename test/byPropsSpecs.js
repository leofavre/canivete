import byProps from "../dist/byProps";

describe("byProps", function() {

	const unsortedNumeric = [{
		value: 15
	}, {
		value: -20
	}, {
		value: 15.2
	}, {
		value: 3
	}, {
		value: 0.8
	}, {
		value: 1300
	}];

	const sortedNumeric = [{
		value: -20
	}, {
		value: 0.8
	}, {
		value: 3
	}, {
		value: 15
	}, {
		value: 15.2
	}, {
		value: 1300
	}];

	const sortedNumericDESC = [{
		value: 1300
	}, {
		value: 15.2
	}, {
		value: 15
	}, {
		value: 3
	}, {
		value: 0.8
	}, {
		value: -20
	}];

	const sortedNumericAbsolute = [{
		value: 0.8
	}, {
		value: 3
	}, {
		value: 15
	}, {
		value: 15.2
	}, {
		value: -20
	}, {
		value: 1300
	}];

	const sortedNumericAbsoluteDESC = [{
		value: 1300
	}, {
		value: -20
	}, {
		value: 15.2
	}, {
		value: 15
	}, {
		value: 3
	}, {
		value: 0.8
	}];

	const deepUnsortedNumeric = [{
		value: {
			inner: 15
		}
	}, {
		value: {
			inner: -20
		}
	}, {
		value: {
			inner: 15.2
		}
	}, {
		value: {
			inner: 3
		}
	}, {
		value: {
			inner: 0.8
		}
	}, {
		value: {
			inner: 1300
		}
	}];

	const deepSortedNumeric = [{
		value: {
			inner: -20
		}
	}, {
		value: {
			inner: 0.8
		}
	}, {
		value: {
			inner: 3
		}
	}, {
		value: {
			inner: 15
		}
	}, {
		value: {
			inner: 15.2
		}
	}, {
		value: {
			inner: 1300
		}
	}];

	const deepSortedNumericDESC = [{
		value: {
			inner: 1300
		}
	}, {
		value: {
			inner: 15.2
		}
	}, {
		value: {
			inner: 15
		}
	}, {
		value: {
			inner: 3
		}
	}, {
		value: {
			inner: 0.8
		}
	}, {
		value: {
			inner: -20
		}
	}];

	const deepSortedNumericAbsolute = [{
		value: {
			inner: 0.8
		}
	}, {
		value: {
			inner: 3
		}
	}, {
		value: {
			inner: 15
		}
	}, {
		value: {
			inner: 15.2
		}
	}, {
		value: {
			inner: -20
		}
	}, {
		value: {
			inner: 1300
		}
	}];

	const deepSortedNumericAbsoluteDESC = [{
		value: {
			inner: 1300
		}
	}, {
		value: {
			inner: -20
		}
	}, {
		value: {
			inner: 15.2
		}
	}, {
		value: {
			inner: 15
		}
	}, {
		value: {
			inner: 3
		}
	}, {
		value: {
			inner: 0.8
		}
	}];

	const unsortedPortugueseWords = [{
		value: "Áureo"
	}, {
		value: "Árvore"
	}, {
		value: "Ética"
	}, {
		value: "Elástico"
	}, {
		value: "Arte"
	}, {
		value: "Entusiasta"
	}];

	const sortedPortugueseWords = [{
		value: "Arte"
	}, {
		value: "Árvore"
	}, {
		value: "Áureo"
	}, {
		value: "Elástico"
	}, {
		value: "Entusiasta"
	}, {
		value: "Ética"
	}];

	const singleObject = [{
		value: "laser"
	}];

	const deepSingleObject = [{
		value: {
			inner: "laser"
		}
	}];

	const unsortedStores = [{
		name: "Richards",
		city: "Rio de Janeiro",
		state: "RJ"
	}, {
		name: "Ellus",
		city: "São Paulo",
		state: "SP"
	}, {
		name: "Salinas",
		city: "Búzios",
		state: "RJ"
	}, {
		name: "VR",
		city: "São Paulo",
		state: "SP"
	}, {
		name: "Bobstore",
		city: "Curitiba",
		state: "PR"
	}];

	const sortedStoresByStateCityName = [{
		name: "Bobstore",
		city: "Curitiba",
		state: "PR"
	}, {
		name: "Salinas",
		city: "Búzios",
		state: "RJ"
	}, {
		name: "Richards",
		city: "Rio de Janeiro",
		state: "RJ"
	}, {
		name: "Ellus",
		city: "São Paulo",
		state: "SP"
	}, {
		name: "VR",
		city: "São Paulo",
		state: "SP"
	}];

	const sortedStoresByNameCityState = [{
		name: "Bobstore",
		city: "Curitiba",
		state: "PR"
	}, {
		name: "Ellus",
		city: "São Paulo",
		state: "SP"
	}, {
		name: "Richards",
		city: "Rio de Janeiro",
		state: "RJ"
	}, {
		name: "Salinas",
		city: "Búzios",
		state: "RJ"
	}, {
		name: "VR",
		city: "São Paulo",
		state: "SP"
	}];

	const sortedStoresByStateDESCCityName = [{
		name: "Ellus",
		city: "São Paulo",
		state: "SP"
	}, {
		name: "VR",
		city: "São Paulo",
		state: "SP"
	}, {
		name: "Salinas",
		city: "Búzios",
		state: "RJ"
	}, {
		name: "Richards",
		city: "Rio de Janeiro",
		state: "RJ"
	}, {
		name: "Bobstore",
		city: "Curitiba",
		state: "PR"
	}];

	const deepUnsortedStores = [{
		name: "Richards",
		location: {
			city: "Rio de Janeiro",
			state: "RJ"
		},
	}, {
		name: "Ellus",
		location: {
			city: "São Paulo",
			state: "SP"
		},
	}, {
		name: "Salinas",
		location: {
			city: "Búzios",
			state: "RJ"
		},
	}, {
		name: "VR",
		location: {
			city: "São Paulo",
			state: "SP"
		},
	}, {
		name: "Bobstore",
		location: {
			city: "Curitiba",
			state: "PR"
		},
	}];

	const deepSortedStoresByStateDESCCityName = [{
		name: "Ellus",
		location: {
			city: "São Paulo",
			state: "SP"
		}
	}, {
		name: "VR",
		location: {
			city: "São Paulo",
			state: "SP"
		}
	}, {
		name: "Salinas",
		location: {
			city: "Búzios",
			state: "RJ"
		}
	}, {
		name: "Richards",
		location: {
			city: "Rio de Janeiro",
			state: "RJ"
		}
	}, {
		name: "Bobstore",
		location: {
			city: "Curitiba",
			state: "PR"
		}
	}];

	const unsortedWords = [{
		value: "Word"
	}, {
		value: "Computer"
	}, {
		value: "Planet"
	}, {
		value: "Lever"
	}];

	const sortedWordsBySecondLetterAndBeyond = [{
		value: "Lever"
	}, {
		value: "Planet"
	}, {
		value: "Computer"
	}, {
		value: "Word"
	}, ];

	it("Should sort object properties with numeric values correctly, passing a path as paremeter.", function() {
		expect(unsortedNumeric.sort(byProps("value")))
			.toEqual(sortedNumeric);
	});

	it("Should sort object properties with numeric values correctly, passing a composed path as paremeter.", function() {
		expect(deepUnsortedNumeric.sort(byProps("value.inner")))
			.toEqual(deepSortedNumeric);
	});

	it("Should sort object properties with numeric values correctly, passing a sort field with a path and reverse set to true as parameter.", function() {
		expect(unsortedNumeric.sort(byProps({
				path: "value",
				reverse: true
			})))
			.toEqual(sortedNumericDESC);
	});

	it("Should sort object properties with numeric values correctly, passing a sort field with a composed path and reverse set to true as parameter.", function() {
		expect(deepUnsortedNumeric.sort(byProps({
				path: "value.inner",
				reverse: true
			})))
			.toEqual(deepSortedNumericDESC);
	});

	it("Should sort object properties with numeric values correctly, as if they were absolute numbers, passing a sort field with a path and a primer function as parameter.", function() {
		expect(unsortedNumeric.sort(byProps({
				path: "value",
				primer: num => Math.abs(num)
			})))
			.toEqual(sortedNumericAbsolute);
	});

	it("Should sort object properties with numeric values correctly, as if they were absolute numbers, passing a sort field with a composed path and a primer function as parameter.", function() {
		expect(deepUnsortedNumeric.sort(byProps({
				path: "value.inner",
				primer: num => Math.abs(num)
			})))
			.toEqual(deepSortedNumericAbsolute);
	});

	it("Should be able to combine primer and reverse properties of the sort field.", function() {
		expect(unsortedNumeric.sort(byProps({
				path: "value",
				primer: Math.abs,
				reverse: true
			})))
			.toEqual(sortedNumericAbsoluteDESC);
	});

	it("Should be able to combine primer and reverse properties of the sort field with a composed path.", function() {
		expect(deepUnsortedNumeric.sort(byProps({
				path: "value.inner",
				primer: Math.abs,
				reverse: true
			})))
			.toEqual(deepSortedNumericAbsoluteDESC);
	});

	it("Should not fail with accented latin characters.", function() {
		expect(unsortedPortugueseWords.sort(byProps("value")))
			.toEqual(sortedPortugueseWords);
	});

	it("Should not fail with an array with a single object.", function() {
		expect(singleObject.sort(byProps("value")))
			.toEqual(singleObject);
	});

	it("Should not fail with an array with a single object, even with composed paths.", function() {
		expect(deepSingleObject.sort(byProps("value.inner")))
			.toEqual(deepSingleObject);
	});

	it("Should be able to use combined sorting properties as strings.", function() {
		expect(unsortedStores.sort(byProps("state", "city", "name")))
			.toEqual(sortedStoresByStateCityName);

		expect(unsortedStores.sort(byProps("name", "city", "state")))
			.toEqual(sortedStoresByNameCityState);
	});

	it("Should be able to use combined sorting properties as objects or strings.", function() {
		expect(unsortedStores.sort(byProps({
				path: "state",
				reverse: true
			}, "city", "name")))
			.toEqual(sortedStoresByStateDESCCityName);

		expect(unsortedStores.sort(byProps({
				path: "state",
				reverse: true
			}, {
				path: "city"
			}, {
				path: "name"
			})))
			.toEqual(sortedStoresByStateDESCCityName);
	});

	it("Should be able to use combined sorting properties as objects and composed paths.", function() {
		expect(deepUnsortedStores.sort(byProps({
				path: "location.state",
				reverse: true
			}, {
				path: "location.city"
			}, {
				path: "name"
			})))
			.toEqual(deepSortedStoresByStateDESCCityName);
	});

	it("Should be able to create weird sortings with the primer function, for exemple, sorting from the second letter and beyond.", function() {
		expect(unsortedWords.sort(byProps({
				path: "value",
				primer: str => str.slice(1)
			})))
			.toEqual(sortedWordsBySecondLetterAndBeyond);
	});

	it("Should throw an error if no sort criterias are passed as parameters.", function() {
		expect(() => unsortedWords.sort(byProps())).toThrow();
	});
});
