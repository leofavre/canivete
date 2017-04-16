* **[Promise](#promise)**
  * [waitInPromise](#waitInPromise)

* **[Reduce](#reduce)**
  * [toAverage](#toAverage)
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

Returns the average of the items in an array.

This function is curried so as to be used as the
first parameter of `Array.prototype.reduce()`.

Note that reducing arrays with non-numeric values
using `toAverage()` can lead to unexpected results.

#### Returns
*{number}*: The average of the items in an array<br/>

#### Example

```javascript
[3, 5, 7, 9].reduce(toAverage());
// (3 + 5 + 7 + 9) / 4
// => 6
```

<a name="toSum"></a>
### `toSum()`

Returns the sum of the items in an array.

This function is curried so as to be used as the
first parameter of `Array.prototype.reduce()`.

Note that reducing arrays with non-numeric values
using `toSum()` can lead to unexpected results.

#### Returns
*{number}*: The sum of the numbers in an array<br/>

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

Returns `undefined` if the parameters passed to
the function are not two strings.

#### Parameters
`str`*{string}*: Base string<br/>
`delimiter`*{string}*: String to be found<br/>

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

Returns `undefined` if the parameters passed to
the function are not two strings.

#### Parameters
`str`*{string}*: Base string<br/>
`delimiter`*{string}*: String to be found<br/>

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

Returns `undefined` if the parameters passed to
the function are not two strings.

#### Parameters
`str`*{string}*: Base string<br/>
`delimiter`*{string}*: String to be found<br/>

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

Returns `undefined` if the parameters passed to
the function are not two strings.

#### Parameters
`str`*{string}*: Base string<br/>
`delimiter`*{string}*: String to be found<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
beforeLast("parallelepiped", "le");

// => "paralle"
```


