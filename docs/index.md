* **[Promise](#promise)**
  * [waitInPromise](#waitInPromise)

* **[Reduce](#reduce)**
  * [toAverage](#toAverage)
  * [toAverageProp](#toAverageProp)
  * [toClosest](#toClosest)
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
`delay`*{number}*: Delay in milliseconds<br/>

#### Returns
*{Promise}*: Resolved value from the previous step<br/>

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

When used as the first parameter of
`Array.prototype.reduce()`, returns the average
of the items in an array.

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

Given a property path

This function is curried so as to be used as the
first parameter of `Array.prototype.reduce()`.

Note that this function considers that all objects in
the array have the same set of properties.

#### Parameters
`path`*{string}*: The path to the property of an object<br/>

#### Returns
*{object}*: The object in which an specified property has the closest value to the average<br/>

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

When used as the first parameter of
`Array.prototype.reduce()`, returns the first
item the has the closest value to the one
specified as a parameter.

Note that reducing arrays with non-numeric values
using `toClosest()` can lead to unexpected results.

#### Parameters
`num`*{number}*: The value to be compared with.<br/>

#### Returns
*{number}*: The value in an array which is the closest to the compared value.<br/>

#### Example

```javascript
[3, 5, 7, 9].reduce(toClosest(6));
// => 5

[3, 5, 7, 9].reduce(toClosest(-2));
// => 3
```

<a name="toSum"></a>
### `toSum()`

When used as the first parameter of
`Array.prototype.reduce()`, returns the sum
of the items in an array.

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


