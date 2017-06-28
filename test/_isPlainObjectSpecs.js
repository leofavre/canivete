import _isPlainObject from "../dist/internal/helpers/_isPlainObject";

class Foo {
	constructor(a) {
		this.a = 1;
	}
}

function Doo(a) { this.a = 1; }

describe("_isPlainObject", function() {
	it(`"Should return false if passed anything other than a plain object.`, function() {
		expect(_isPlainObject()).toBe(false);
		expect(_isPlainObject([])).toBe(false);
		expect(_isPlainObject({})).toBe(true);
		expect(_isPlainObject(null)).toBe(false);
		expect(_isPlainObject(undefined)).toBe(false);
		expect(_isPlainObject(NaN)).toBe(false);
		expect(_isPlainObject(new Set())).toBe(false);
		expect(_isPlainObject(new WeakSet())).toBe(false);
		expect(_isPlainObject(new Map())).toBe(false);
		expect(_isPlainObject(new WeakMap())).toBe(false);
		expect(_isPlainObject(document.createElement("div"))).toBe(false);
		expect(_isPlainObject(15)).toBe(false);
		expect(_isPlainObject(15.45)).toBe(false);
		expect(_isPlainObject(Math.PI)).toBe(false);
		expect(_isPlainObject("")).toBe(false);
		expect(_isPlainObject("345")).toBe(false);
		expect(_isPlainObject(new String("window"))).toBe(false);
		expect(_isPlainObject(new String("😋📋👌"))).toBe(false);
		expect(_isPlainObject(0)).toBe(false);
		expect(_isPlainObject(1)).toBe(false);
		expect(_isPlainObject(true)).toBe(false);
		expect(_isPlainObject(false)).toBe(false);

		expect(_isPlainObject(new Object())).toBe(true);
		expect(_isPlainObject({ 'x': 0, 'y': 0 })).toBe(true);
		expect(_isPlainObject(Object.create(null))).toBe(true);
		expect(_isPlainObject(Object.create(Object.prototype))).toBe(true);
		expect(_isPlainObject(Object.prototype)).toBe(true);
		expect(_isPlainObject(Object)).toBe(false);
		expect(_isPlainObject(Math)).toBe(false);
		expect(_isPlainObject(Math.abs)).toBe(false);
		expect(_isPlainObject(new Foo())).toBe(false);
		expect(_isPlainObject(new Doo())).toBe(false);
		expect(_isPlainObject([1, 2, 3])).toBe(false);
		expect(_isPlainObject(Object)).toBe(false);
		expect(_isPlainObject(null)).toBe(false);
		expect(_isPlainObject('str')).toBe(false);
		expect(_isPlainObject(5)).toBe(false);
		expect(_isPlainObject(true)).toBe(false);
		expect(_isPlainObject(undefined)).toBe(false);
		expect(_isPlainObject(new Date())).toBe(false);
	});
});