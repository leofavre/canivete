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
will resolve without delay, skipping the internal
`setTimeout()`.

#### Parameters
`delay`*{number}*: Delay in milliseconds<br/>

#### Returns
*{Promise}*: Resolved value from the previous step.<br/>

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
### `toAverage(prevNum, nextNum, index, arr)`

Used as the parameter for `Array.prototype.reduce()`,
this function will return the average of all the
items in an array.

Non-numeric parameters will be discarded.

#### Parameters
`prevNum`*{number}*<br/>
`nextNum`*{number}*<br/>
`index`*{number}*<br/>
`arr`*{Array}*<br/>

#### Returns
*{number}*: The average of the numbers in an array<br/>

#### Example

```javascript
[3, 5, 7, 9].reduce(toAverage);
// => 6
```

<a name="toSum"></a>
### `toSum(prevNum, nextNum)`

Used as the parameter for `Array.prototype.reduce()`,
this function will return the sum of all the items
in an array.

Non-numeric parameters will be converted to zero;

#### Parameters
`prevNum`*{number}*<br/>
`nextNum`*{number}*<br/>

#### Returns
*{number}*: The sum of the numbers in an array<br/>

#### Example

```javascript
[3, 5, 7, 9].reduce(toSum);
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


