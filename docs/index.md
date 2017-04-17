* **[Promise](#promise)**
  * [waitInPromise](#waitInPromise)

* **[Reduce](#reduce)**
  * [toAverage](#toAverage)
  * [toAverageProp](#toAverageProp)
  * [toClosest](#toClosest)
  * [toLargestProp](#toLargestProp)
  * [toSmallestProp](#toSmallestProp)
  * [toSum](#toSum)

* **[String](#string)**
  * [afterFirst](#afterFirst)
  * [afterLast](#afterLast)
  * [beforeFirst](#beforeFirst)
  * [beforeLast](#beforeLast)

---

## Promise

<a name="waitInPromise"></a>
### `waitInPromise(delay)`

Delays the chaining of a Promise by a specified
time in milliseconds.

This function is curried so as to be used inside
the `.then()` method, passing along the resolved
value of the previous Promise step to the next.

If a non-numeric parameter is passed, the Promise
resolves without delay, skipping the internal
`setTimeout()`.

#### Parameters
`delay`*{number}*: The delay in milliseconds.<br/>

#### Returns
*{Promise}*: The resolved value from the previous steps of the Promise.<br/>

#### Example

```javascript
Promise.resolve("waiting")
	.then(waitInPromise(500))
	.then(console.log);

// => "waiting"
// shown after 500ms
```

## Reduce

<a name="toAverage"></a>
### `toAverage()`

When used with `Array.prototype.reduce()`, returns
the average of the values in an array.

Note that reducing arrays with non-numeric values
using `toAverage()` can lead to unexpected results.

#### Returns
*{number}*: The average of the values in an array.<br/>

#### Example

```javascript
[3, 5, 7, 9].reduce(toAverage());
// => 6
```

<a name="toAverageProp"></a>
### `toAverageProp(path)`

When used with `Array.prototype.reduce()`, returns
the object in an array the in which a specific property,
passed as parameter, has the closest value to the average.

Note that this function expects the reduced array to be
formed by objects with the same set of properties.

#### Parameters
`path`*{string}*: The path to the property of an object.<br/>

#### Returns
*{object}*: The object in which an specific property has the closest value to the average.<br/>

#### Example

```javascript
var cities = [{
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

// cities.reduce(toAverageProp("temperature"));
// => { city: "São Paulo", [...] }

// cities.reduce(toAverageProp("demographics.population"));
// => { city: "Rio de Janeiro", [...] }
```

<a name="toClosest"></a>
### `toClosest(num)`

When used with `Array.prototype.reduce()`, returns
the closest value to the one passed as parameter.

If two or more values are as close to the base
value as each other, the first one found will
prevail.

Note that reducing arrays with non-numeric values
using `toClosest()` can lead to unexpected results.

#### Parameters
`num`*{number}*: The base value.<br/>

#### Returns
*{number}*: The value from an array, closest to the base value.<br/>

#### Example

```javascript
[3, 5, 7, 9].reduce(toClosest(6));
// => 5

[3, 5, 7, 9].reduce(toClosest(-2));
// => 3
```

<a name="toLargestProp"></a>
### `toLargestProp(path)`

When used with `Array.prototype.reduce()`, returns
the object in an array that has the largest value
for a specific property.

Note that this function expects the reduced array to be
formed by objects with the same set of properties.

#### Parameters
`path`*{string}*: The path to the property of an object.<br/>

#### Returns
*{object}*: The object in which an specific property has the largest value.<br/>

#### Example

```javascript
var cities = [{
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

// cities.reduce(toLargestProp("temperature"));
// => { city: "Rio de Janeiro", [...] }

// cities.reduce(toLargestProp("demographics.population"));
// => { city: "São Paulo", [...] }
```

<a name="toSmallestProp"></a>
### `toSmallestProp(path)`

When used with `Array.prototype.reduce()`, returns
the object in an array that has the smallest value
for a specific property.

Note that this function expects the reduced array to be
formed by objects with the same set of properties.

#### Parameters
`path`*{string}*: The path to the property of an object.<br/>

#### Returns
*{object}*: The object in which an specific property has the smallest value.<br/>

#### Example

```javascript
var cities = [{
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

// cities.reduce(toSmallestProp("temperature"));
// => { city: "Curitiba", [...] }

// cities.reduce(toSmallestProp("demographics.population"));
// => { city: "Florianópolis", [...] }
```

<a name="toSum"></a>
### `toSum()`

When used with `Array.prototype.reduce()`, returns
the sum of the values in an array.

Note that reducing arrays with non-numeric values
using `toSum()` can lead to unexpected results.

#### Returns
*{number}*: The sum of the values in an array.<br/>

#### Example

```javascript
[3, 5, 7, 9].reduce(toSum());
// => 24
```

## String

<a name="afterFirst"></a>
### `afterFirst(str, delimiter)`

Given two strings, returns a new one formed
by the characters **after the first
occurrence** of the second string in the first.

Returns an empty string if nothing is found.

Note that non-string parameters will be converted
to string, which can lead to unexpected results.

#### Parameters
`str`*{string}*: The base string.<br/>
`delimiter`*{string}*: The string to be found.<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
afterFirst("parallelepiped", "le");

// => "lepiped"
```

<a name="afterLast"></a>
### `afterLast(str, delimiter)`

Given two strings, returns a new one formed
by the characters **after the last
occurrence** of the second string in the first.

Returns an empty string if nothing is found.

Note that non-string parameters will be converted
to string, which can lead to unexpected results.

#### Parameters
`str`*{string}*: The base string.<br/>
`delimiter`*{string}*: The string to be found.<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
afterLast("parallelepiped", "le");

// => "piped"
```

<a name="beforeFirst"></a>
### `beforeFirst(str, delimiter)`

Given two strings, returns a new one formed
by the characters **before the first
occurrence** of the second string in the first.

Returns an empty string if nothing is found.

Note that non-string parameters will be converted
to string, which can lead to unexpected results.

#### Parameters
`str`*{string}*: The base string.<br/>
`delimiter`*{string}*: The string to be found.<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
beforeFirst("parallelepiped", "le");

// => "paral"
```

<a name="beforeLast"></a>
### `beforeLast(str, delimiter)`

Given two strings, returns a new one formed
by the characters **before the last
occurrence** of the second string in the first.

Returns an empty string if nothing is found.

Note that non-string parameters will be converted
to string, which can lead to unexpected results.

#### Parameters
`str`*{string}*: The base string.<br/>
`delimiter`*{string}*: The string to be found.<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
beforeLast("parallelepiped", "le");

// => "paralle"
```


