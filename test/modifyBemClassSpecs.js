import modifyBemClass from "../dist/modifyBemClass";
import modifyBemClassCompact from "../dist/modifyBemClassCompact";

const delimiterData = {
	"bemDelimitersA": ["__", "--", "-"],
	"bemDelimitersB": ["__", "_", "_"],
	"bemDelimitersC": ["-", "--", "--"]
};

const modifyBemClassData = {
	"bemDelimitersA": [{
		original: "menu",
		expectation: "menu menu--active",
		changes: {
			"menu": {
				"active": true
			}
		}
	}, {
		original: "menu menu--active",
		expectation: "menu",
		changes: {
			"menu": {
				"active": false
			}
		}
	}, {
		original: "menu menu--active menu--level-40",
		expectation: "menu menu--level-42",
		changes: {
			"menu": {
				"active": false,
				"level": 42
			}
		}
	}, {
		original: "menu menu--active menu--level-40 landing__menu",
		expectation: "menu menu--level-42 landing__menu landing__menu--active",
		changes: {
			"menu": {
				"active": false,
				"level": 42
			},
			"landing__menu": {
				"active": true
			}
		}
	}, {
		original: "",
		expectation: "element",
		changes: {
			"element": {}
		}
	}, {
		original: "--active --level-40",
		expectation: "--level-42",
		changes: {
			"": {
				"active": false,
				"level": 42
			}
		}
	}, {
		original: "menu",
		expectation: "menu",
		changes: {}
	}],
	"bemDelimitersB": [{
		original: "menu",
		expectation: "menu menu_active",
		changes: {
			"menu": {
				"active": true
			}
		}
	}, {
		original: "menu menu_active",
		expectation: "menu",
		changes: {
			"menu": {
				"active": false
			}
		}
	}, {
		original: "menu menu_active menu_level_40",
		expectation: "menu menu_level_42",
		changes: {
			"menu": {
				"active": false,
				"level": 42
			}
		}
	}, {
		original: "menu menu_active menu_level_40 landing__menu",
		expectation: "menu menu_level_42 landing__menu landing__menu_active",
		changes: {
			"menu": {
				"active": false,
				"level": 42
			},
			"landing__menu": {
				"active": true
			}
		}
	}, {
		original: "",
		expectation: "element",
		changes: {
			"element": {}
		}
	}, {
		original: "_active _level_40",
		expectation: "_level_42",
		changes: {
			"": {
				"active": false,
				"level": 42
			}
		}
	}, {
		original: "menu",
		expectation: "menu",
		changes: {}
	}],
	"bemDelimitersC": [{
		original: "menu",
		expectation: "menu menu--active",
		changes: {
			"menu": {
				"active": true
			}
		}
	}, {
		original: "menu menu--active",
		expectation: "menu",
		changes: {
			"menu": {
				"active": false
			}
		}
	}, {
		original: "menu menu--active menu--level--40",
		expectation: "menu menu--level--42",
		changes: {
			"menu": {
				"active": false,
				"level": 42
			}
		}
	}, {
		original: "menu menu--active menu--level--40 landing-menu",
		expectation: "menu menu--level--42 landing-menu landing-menu--active",
		changes: {
			"menu": {
				"active": false,
				"level": 42
			},
			"landing-menu": {
				"active": true
			}
		}
	}, {
		original: "",
		expectation: "element",
		changes: {
			"element": {}
		}
	}, {
		original: "--active --level--40",
		expectation: "--level--42",
		changes: {
			"": {
				"active": false,
				"level": 42
			}
		}
	}, {
		original: "menu",
		expectation: "menu",
		changes: {}
	}]
};

const modifyBemClassDataCompact = {
	"bemDelimitersA": [{
		original: "menu",
		expectation: "menu--active",
		changes: {
			"menu": {
				"active": true
			}
		}
	}, {
		original: "menu--active",
		expectation: "menu",
		changes: {
			"menu": {
				"active": false
			}
		}
	}, {
		original: "menu menu--active",
		expectation: "menu",
		changes: {
			"menu": {
				"active": false
			}
		}
	}, {
		original: "menu menu--active menu--level-40",
		expectation: "menu--level-42",
		changes: {
			"menu": {
				"active": false,
				"level": 42
			}
		}
	}, {
		original: "menu--active menu--level-40 landing__menu",
		expectation: "menu--level-42 landing__menu--active",
		changes: {
			"menu": {
				"active": false,
				"level": 42
			},
			"landing__menu": {
				"active": true
			}
		}
	}, {
		original: "",
		expectation: "element",
		changes: {
			"element": {}
		}
	}, {
		original: "--active --level-40",
		expectation: "--level-42",
		changes: {
			"": {
				"active": false,
				"level": 42
			}
		}
	}, {
		original: "menu",
		expectation: "menu",
		changes: {}
	}],
	"bemDelimitersB": [{
		original: "menu",
		expectation: "menu_active",
		changes: {
			"menu": {
				"active": true
			}
		}
	}, {
		original: "menu_active",
		expectation: "menu",
		changes: {
			"menu": {
				"active": false
			}
		}
	}, {
		original: "menu menu_active",
		expectation: "menu",
		changes: {
			"menu": {
				"active": false
			}
		}
	}, {
		original: "menu menu_active menu_level_40",
		expectation: "menu_level_42",
		changes: {
			"menu": {
				"active": false,
				"level": 42
			}
		}
	}, {
		original: "menu_active menu_level_40 landing__menu",
		expectation: "menu_level_42 landing__menu_active",
		changes: {
			"menu": {
				"active": false,
				"level": 42
			},
			"landing__menu": {
				"active": true
			}
		}
	}, {
		original: "",
		expectation: "element",
		changes: {
			"element": {}
		}
	}, {
		original: "_active _level_40",
		expectation: "_level_42",
		changes: {
			"": {
				"active": false,
				"level": 42
			}
		}
	}, {
		original: "menu",
		expectation: "menu",
		changes: {}
	}],
	"bemDelimitersC": [{
		original: "menu",
		expectation: "menu--active",
		changes: {
			"menu": {
				"active": true
			}
		}
	}, {
		original: "menu--active",
		expectation: "menu",
		changes: {
			"menu": {
				"active": false
			}
		}
	}, {
		original: "menu menu--active",
		expectation: "menu",
		changes: {
			"menu": {
				"active": false
			}
		}
	}, {
		original: "menu menu--active menu--level--40",
		expectation: "menu--level--42",
		changes: {
			"menu": {
				"active": false,
				"level": 42
			}
		}
	}, {
		original: "menu--active menu--level--40 landing-menu",
		expectation: "menu--level--42 landing-menu--active",
		changes: {
			"menu": {
				"active": false,
				"level": 42
			},
			"landing-menu": {
				"active": true
			}
		}
	}, {
		original: "",
		expectation: "element",
		changes: {
			"element": {}
		}
	}, {
		original: "--active --level--40",
		expectation: "--level--42",
		changes: {
			"": {
				"active": false,
				"level": 42
			}
		}
	}, {
		original: "menu",
		expectation: "menu",
		changes: {}
	}]
};

function makeBemTestsFromData(method, delimiterData, methodData) {
	Object.keys(delimiterData).forEach(function(delimiter) {
		methodData[delimiter].forEach(function(data) {
			let delimiterArr = delimiterData[delimiter];
			makeBemTest(method, makeBemDescription(data, delimiterArr), data.original, data.expectation, data.changes, delimiterArr);
		});
	});
}

function makeBemTest(method, description, initialClassName, expectation, bemObj, delimiterArr) {
	return it(description, function() {
		let domEl = makeBemDivWithClassName(initialClassName);
		method(domEl, bemObj, delimiterArr);
		expect(domEl.className.split(" ").sort()).toEqual(expectation.split(" ").sort());
	});
}

function makeBemDescription(data, delimiterArr) {
	let sortedOriginal = data.original.split(" ").sort().join(" "),
		sortedExpectation = data.expectation.split(" ").sort().join(" "),
		bemObjJson = JSON.stringify(data.changes),
		delimiterStr = `"` + delimiterArr.slice(0, 2).join(`", "`) + `" e "` + delimiterArr.slice(2) + `"`;

	return `A classe "${sortedOriginal}" vira "${sortedExpectation}" modificada com um objeto ${bemObjJson} e delimitadores ${delimiterStr}.`;
}

function makeBemDivWithClassName(className) {
	var domEl = document.createElement("div");
	domEl.className = className;
	return domEl;
}

describe("modifyBemClass", function() {
	makeBemTestsFromData(modifyBemClass, delimiterData, modifyBemClassData);
});

describe("modifyBemClassCompact", function() {
	makeBemTestsFromData(modifyBemClassCompact, delimiterData, modifyBemClassDataCompact);
});
