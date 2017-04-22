---
layout: default
title: Canivete
---

## BEM

<a name="formatBemClass"></a>
### `formatBemClass(block, [element], [modifier], [value], delimiters)`

Formats a CSS class according to the
[BEM methodology](https://en.bem.info/methodology/). The
function receives a block, an element, a modifier, a value
for the modifier and an array of BEM delimiters, e.g. “__”,
“--” and “-”.

#### Parameters

| Name | Default | Type | Description |
| --- | --- | --- | --- |
| `block` |  | String | The BEM block. |
| `element` |  | String | The BEM element. **optional** |
| `modifier` | `true` | String | The BEM modifier. **optional** |
| `value` |  | String<br>Number<br>Boolean | The BEM modifier value. **optional** |
| `delimiters` |  | Array.&lt;string&gt; | The BEM delimiters, e.g. “__”, “--” and “-”. |

#### Return

| Type | Description |
| --- | --- |
| String | The BEM CSS class. |

#### Examples

```javascript
let delimiters = ["__", "--", "-"];

formatBemClass("menu", delimiters);
// => "menu"

formatBemClass("menu", "item", delimiters);
// => "menu__item"

formatBemClass("menu", "item", "active", delimiters);
// => "menu__item--active"

formatBemClass("menu", "item", "active", false, delimiters);
// => "menu__item"

formatBemClass("menu", "item", "active", true, delimiters);
// => "menu__item--active"

formatBemClass("menu", "item", "level", 42, delimiters);
// => "menu__item--level-42"

formatBemClass("menu", "item", "level", "42", delimiters);
// => "menu__item--level-42"
```

```javascript
let delimiters = ["__", "--", "-"];

formatBemClass("button", null, "active", delimiters);
// => "button--active"

formatBemClass("button", null, "active", false, delimiters);
// => "button"

formatBemClass("button", null, "active", true, delimiters);
// => "button--active"

formatBemClass("button", null, "level", 42, delimiters);
// => "button--level-42"

formatBemClass("button", null, "level", "42", delimiters);
// => "button--level-42"
```

## DOM

<a name="addClass"></a>
### `addClass(domEls, str)`

Adds a CSS class to one or many DOM elements.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEls` | HTMLElement<br>HTMLCollection<br>NodeList<br>Array.&lt;HTMLElement&gt;<br>Set.&lt;HTMLElement&gt; | One or many DOM elements. |
| `str` | String | The CSS class. |

#### Examples

```javascript
let oneElement = document.querySelector("a");
addClass(oneElement, "link");

console.log(oneElement.className);
// => "link"
```

```javascript
let manyElements = document.querySelectorAll("a");
addClass(manyElements, "link");

console.log(manyElements[0].className);
// => "link"
```

<a name="clippingInfo"></a>
### `clippingInfo(domEl, [maskDef])`

Given a DOM element, returns an object with clipping
and position information relative to a mask, defined
by the second parameter, or to the viewport, if the
second parameter is omitted.

The mask can be either a DOM element or an object
containing numeric values for "top", "bottom",
"left" and "right" properties, like a
[DOMRect](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect).

The returned object has the following properties:

| Property | Type | Element relation to the mask |
|---|---|---|
| `isOffTop` | boolean | Above and off the mask. |
| `isOffBottom` | boolean | Below and off the mask. |
| `isOffLeft` | boolean | On the left and off the mask. |
| `isOffRight` | boolean | On the right and off the mask. |
| `isOff` | boolean | Off the mask. |
| `isClippedTop` | boolean | Above and intersecting with the mask. |
| `isClippedBottom` | boolean | Below and intersecting with the mask. |
| `isClippedLeft` | boolean | On the left and intersecting with the mask. |
| `isClippedRight` | boolean | On the right and intersecting with the mask. |
| `isClipped` | boolean | Element intersects with the mask. |
| `isFullyVisible` | boolean | Fully visible inside the mask. |
| `isPartiallyVisible` | boolean | Alias for `isClipped`. |
| `isInvisible` | boolean | Alias for `isOff`. |
| `isAsVisibleAsPossible` | boolean | As visible as possible (element > mask). |
| `isNotAsVisibleAsPossible` | boolean | Not as visible as possible (element > mask). |

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEl` | HTMLElement | The DOM element. |
| `maskDef` | HTMLElement<br>Object | The mask definition. **optional** |

#### Return

| Type | Description |
| --- | --- |
| ClippingObject | Position and clipping information (see table above). |

#### Example

```javascript
let domEl = document.createElement("div");

domEl.style.position = "fixed";
domEl.style.top = "-50px";
domEl.style.left = "-50px";
domEl.style.width = "200px";
domEl.style.height = "200px";

document.body.appendChild(domEl);

let info = clippingInfo(domEl);

console.log(info.isClippedTop);
// => true

console.log(info.isClippedLeft);
// => true

console.log(info.isFullyVisible);
// => false

console.log(info.isPartiallyVisible);
// => true

console.log(info.isInvisible);
// => false
```

<a name="hasClass"></a>
### `hasClass(domEl, str)`

Verifies if a DOM element has a CSS class.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEl` | HTMLElement | The DOM element. |
| `str` | String | The CSS class. |

#### Return

| Type | Description |
| --- | --- |
| Boolean | Whether the element has the CSS class or not. |

#### Example

```javascript
let oneElement = document.querySelector("a");
oneElement.className = "link reference";

console.log(hasClass(oneElement, "link"));
// => true

console.log(hasClass(oneElement, "button"));
// => false
```

<a name="removeClass"></a>
### `removeClass(domEls, str)`

Removes a CSS class from one or many DOM elements.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEls` | HTMLElement<br>HTMLCollection<br>NodeList<br>Array.&lt;HTMLElement&gt;<br>Set.&lt;HTMLElement&gt; | One or many DOM elements. |
| `str` | String | The CSS class. |

#### Examples

```javascript
let oneElement = document.querySelector(".link.base");
removeClass(oneElement, "link");

console.log(oneElement.className);
// => "base"
```

```javascript
let manyElements = document.querySelectorAll(".link.base");
removeClass(manyElements, "link");

console.log(manyElements[0].className);
// => "base"
```

## Promise

<a name="eventAsPromise"></a>
### `eventAsPromise(domEl, evtName, [happened])`

Transforms a DOM event into a promise.

This functions takes as parameters: a DOM element,
the name of the event that will be listened for
and a function that verifies if the event has already
happened, which receives the DOM element as parameter.

Like all promises in Javascript, this function will
only fulfill once, either if the verification function
returns true or when the event occurs for the first time.

Note that the function throws an error if the first two
parameters are not a DOM element and a string.

#### Parameters

| Name | Default | Type | Description |
| --- | --- | --- | --- |
| `domEl` |  | HTMLElement | The DOM element. |
| `evtName` |  | String | The event that will be listened for. |
| `happened` | `domEl => false` | Function | The verification function. **optional** |

#### Return

| Type | Description |
| --- | --- |
| Promise | When fulfilled, returns the DOM element. |

#### Examples

```javascript
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
document.body.appendChild(checkbox);

eventAsPromise(checkbox, "change")
	.then(checkbox => console.log(checkbox.checked));

// => true
// shown as soon as the checkbox is clicked for the first time.
```

```javascript
let image = document.createElement("img");
image.src = "https://www.w3.org/Icons/w3c_home";
document.body.appendChild(image);

eventAsPromise(image, "load", image => image.complete)
	.then(domEl => console.log(domEl.src));

// => "https://www.w3.org/Icons/w3c_home"
// shown when the image loads or as soon as eventAsPromise is called, if the image has already been loaded.
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

#### Parameter

| Name | Type | Description |
| --- | --- | --- |
| `delay` | Number | The delay in milliseconds. |

#### Return

| Type | Description |
| --- | --- |
| Promise | When fulfilled, returns the resolved value from the previous step. |

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

#### Return

| Type | Description |
| --- | --- |
| Number | The average of the values in an array. |

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

#### Parameter

| Name | Type | Description |
| --- | --- | --- |
| `path` | String | The path to the property of an object. |

#### Return

| Type | Description |
| --- | --- |
| Object | The object in which an specific property has the closest value to the average. |

#### Example

```javascript
let cities = [{
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

#### Parameter

| Name | Type | Description |
| --- | --- | --- |
| `num` | Number | The base value. |

#### Return

| Type | Description |
| --- | --- |
| Number | The value, from an array, closest to the base value. |

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

| Name | Type | Description |
| --- | --- | --- |
| `path` | String | The path to the property of an object. |
| `num` | String | The base value. |

#### Return

| Type | Description |
| --- | --- |
| Object | The object in which an specific property has the closest value to the base value. |

#### Example

```javascript
let cities = [{
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

#### Parameter

| Name | Type | Description |
| --- | --- | --- |
| `path` | String | The path to the property of an object. |

#### Return

| Type | Description |
| --- | --- |
| Object | The object in which a specific property has the largest value. |

#### Example

```javascript
let cities = [{
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

#### Parameter

| Name | Type | Description |
| --- | --- | --- |
| `path` | String | The path to the property of an object. |

#### Return

| Type | Description |
| --- | --- |
| Object | The object in which a specific property has the smallest value. |

#### Example

```javascript
let cities = [{
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

#### Return

| Type | Description |
| --- | --- |
| Number | The sum of the values in an array. |

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

| Name | Type | Description |
| --- | --- | --- |
| `str` | String | The base string. |
| `delimiter` | String | The delimiter string. |

#### Return

| Type |
| --- |
| String |

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

| Name | Type | Description |
| --- | --- | --- |
| `str` | String | The base string. |
| `delimiter` | String | The delimiter string. |

#### Return

| Type |
| --- |
| String |

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

| Name | Type | Description |
| --- | --- | --- |
| `str` | String | The base string. |
| `delimiter` | String | The delimiter string. |

#### Return

| Type |
| --- |
| String |

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

| Name | Type | Description |
| --- | --- | --- |
| `str` | String | The base string. |
| `delimiter` | String | The delimiter string. |

#### Return

| Type |
| --- |
| String |

#### Example

```javascript
beforeLast("parallelepiped", "le");
// => "paralle"
```


