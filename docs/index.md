* **[Promise](#promise)**
  * [eventAsPromise](#eventAsPromise)
  * [waitInPromise](#waitInPromise)

* **[Reduce](#reduce)**
  * [toAverage](#toAverage)
  * [toAverageProp](#toAverageProp)
  * [toClosest](#toClosest)
  * [toClosestProp](#toClosestProp)
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

<a name="eventAsPromise"></a>
### `eventAsPromise(domElement, eventName, [hasAlreadyHappened = domElement => false])`

Treats a DOM event as a promise.

This functions takes as parameters: a DOM element,
the name of the event that will be listened for
and a function that verifies if the event has already
happened, which, in turn, receives the DOM element
as parameter.

Like all promises in Javascript, this function will
only fulfill once, either when the verification function
returns true or when the event occurs for the first time.

Note that the function throws an error is the first two
parameters are not a DOM element and a string.

#### Parameters
`domElement`*{HTMLElement}*: The DOM element.<br/>
`eventName`*{String}*: The name of the event that will be listened for.<br/>
`[hasAlreadyHappened = domElement => false]`*{function}*: The verification function.<br/>

#### Returns
*{Promise}*: When fulfilled, returns the DOM element.<br/>

#### Example

```javascript
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
document.body.appendChild(checkbox);

eventAsPromise(checkbox, "change")
	.then(checkbox => console.log(checkbox.checked));

// => true
// shown as soon as the checkbox is clicked for the first time.

var image = document.createElement("img");
image.src = "https://www.w3.org/Icons/w3c_home";
document.body.appendChild(image);

eventAsPromise(image, "load", image => image.complete)
	.then(domElement => console.log(domElement.src));

// => "https://www.w3.org/Icons/w3c_home"
// shown as soon as the image is loaded, even if it has loaded before the promise creation.
```

<a name="waitInPromise"></a>
### `waitInPromise(delay)`

Delays the chaining of a promise by a specified
time in milliseconds.

This function is curried so as to be used inside
the `.then()` method, passing along the resolved
value of the previous promise step to the next.

Note that if a non-numeric parameter is passed,
the promise resolves without delay, skipping the
internal `setTimeout()`.

#### Parameters
`delay`*{Number}*: The delay in milliseconds.<br/>

#### Returns
*{Promise}*: When fulfilled, returns the resolved value from the previous step.<br/>

#### Example

```javascript
Promise.resolve("waiting")
	.then(waitInPromise(500))
	.then(console.log);

// => "waiting"
// shown after 500ms.
```

## Reduce

<a name="toAverage"></a>
### `toAverage()`

When used with `Array.prototype.reduce()`, returns
the average of the values in an array.

Note that reducing arrays with non-numeric values
using `toAverage()` can lead to unexpected results.

#### Returns
*{Number}*: The average of the values in an array.<br/>

#### Example

```javascript
[3, 5, 7, 9].reduce(toAverage());
// => 6
```

<a name="toAverageProp"></a>
### `toAverageProp(path)`

When used with `Array.prototype.reduce()`, returns
the object in an array in which a specific property,
passed as parameter, has the closest value to the average.

If two or more results are found, the first one
is returned.

Note that this function expects the reduced array to be
formed by objects with the same set of properties.

#### Parameters
`path`*{String}*: The path to the property of an object.<br/>

#### Returns
*{Object}*: The object in which an specific property has the closest value to the average.<br/>

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

// average temperature: 83.625
// average population: 5.09025

cities.reduce(toAverageProp("temperature"));
// => { city: "São Paulo", [...] }

cities.reduce(toAverageProp("demographics.population"));
// => { city: "Rio de Janeiro", [...] }
```

<a name="toClosest"></a>
### `toClosest(num)`

When used with `Array.prototype.reduce()`, returns
the closest value to the one passed as parameter.

If two or more results are found, the first one
is returned.

Note that reducing arrays with non-numeric values
using `toClosest()` can lead to unexpected results.

#### Parameters
`num`*{Number}*: The base value.<br/>

#### Returns
*{Number}*: The value, from an array, closest to the base value.<br/>

#### Example

```javascript
[3, 5, 7, 9].reduce(toClosest(6));
// => 5

[3, 5, 7, 9].reduce(toClosest(-2));
// => 3
```

<a name="toClosestProp"></a>
### `toClosestProp(path, num)`

When used with `Array.prototype.reduce()`, returns
the object in an array in which a specific property,
passed as parameter, has the closest value to another,
also passed as parameter.

If two or more results are found, the first one
is returned.

Note that this function expects the reduced array to be
formed by objects with the same set of properties.

#### Parameters
`path`*{String}*: The path to the property of an object.<br/>
`num`*{String}*: The base value.<br/>

#### Returns
*{Object}*: The object in which an specific property has the closest value to the base value.<br/>

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

cities.reduce(toClosestProp("temperature", 75));
// => { city: "Curitiba", [...] }

cities.reduce(toClosestProp("demographics.population", 5));
// => { city: "Rio de Janeiro", [...] }
```

<a name="toLargestProp"></a>
### `toLargestProp(path)`

When used with `Array.prototype.reduce()`, returns
the object in an array in which a specific property
has the largest property.

If two or more results are found, the first one
is returned.

Note that this function expects the reduced array to be
formed by objects with the same set of properties.

#### Parameters
`path`*{String}*: The path to the property of an object.<br/>

#### Returns
*{Object}*: The object in which a specific property has the largest value.<br/>

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

cities.reduce(toLargestProp("temperature"));
// => { city: "Rio de Janeiro", [...] }

cities.reduce(toLargestProp("demographics.population"));
// => { city: "São Paulo", [...] }
```

<a name="toSmallestProp"></a>
### `toSmallestProp(path)`

When used with `Array.prototype.reduce()`, returns
the object in an array in which a specific property
has the smallest property.

If two or more results are found, the first one
is returned.

Note that this function expects the reduced array to be
formed by objects with the same set of properties.

#### Parameters
`path`*{String}*: The path to the property of an object.<br/>

#### Returns
*{Object}*: The object in which a specific property has the smallest value.<br/>

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

cities.reduce(toSmallestProp("temperature"));
// => { city: "Curitiba", [...] }

cities.reduce(toSmallestProp("demographics.population"));
// => { city: "Florianópolis", [...] }
```

<a name="toSum"></a>
### `toSum()`

When used with `Array.prototype.reduce()`, returns
the sum of the values in an array.

Note that reducing arrays with non-numeric values
using `toSum()` can lead to unexpected results.

#### Returns
*{Number}*: The sum of the values in an array.<br/>

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

Note that non-string parameters will be
automatically converted to strings.

#### Parameters
`str`*{String}*: The base string.<br/>
`delimiter`*{String}*: The delimiter string.<br/>

#### Returns
*{String}*<br/>

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

Note that non-string parameters will be
automatically converted to strings.

#### Parameters
`str`*{String}*: The base string.<br/>
`delimiter`*{String}*: The delimiter string.<br/>

#### Returns
*{String}*<br/>

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

Note that non-string parameters will be
automatically converted to strings.

#### Parameters
`str`*{String}*: The base string.<br/>
`delimiter`*{String}*: The delimiter string.<br/>

#### Returns
*{String}*<br/>

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

Note that non-string parameters will be
automatically converted to strings.

#### Parameters
`str`*{String}*: The base string.<br/>
`delimiter`*{String}*: The delimiter string.<br/>

#### Returns
*{String}*<br/>

#### Example

```javascript
beforeLast("parallelepiped", "le");
// => "paralle"
```


