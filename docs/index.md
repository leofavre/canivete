* **[Promise](#promise)**
  * [waitInPromise](#waitInPromise)

* **[String](#string)**
  * [afterFirst](#afterFirst)
  * [afterLast](#afterLast)
  * [beforeFirst](#beforeFirst)
  * [beforeLast](#beforeLast)

---

## Promise

<a name="waitInPromise"></a>
### `waitInPromise([delay = 0])`

Delays the chaining of a Promise by a specified
time in milliseconds.

This function is curried so as to be used inside
the `.then()` method, passing along the resolved
value of the previous Promise step to the next.

If a non-numeric parameter is passed, the Promise
will resolve without delay.

#### Parameters
`[delay = 0]`*{number}*: Delay in milliseconds<br/>

#### Returns
*{Promise}*<br/>

#### Example

```javascript
Promise.resolve("waiting")
	.then(waitInPromise(500))
	.then(console.log);

// => "waiting"
// shown after 500ms.
```

## String

<a name="afterFirst"></a>
### `afterFirst(str, separator)`

Given two strings, returns a new one formed
by the characters **after the first
occurrence** of the second string in the first.

Returns an empty string if nothing is found.

Returns `undefined` the parameters passed to
the function are not two strings.

#### Parameters
`str`*{string}*: Base string<br/>
`separator`*{string}*: String to be found<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
afterFirst("parallelepiped", "le");

// => "lepiped"
```

<a name="afterLast"></a>
### `afterLast(str, separator)`

Given two strings, returns a new one formed
by the characters **after the last
occurrence** of the second string in the first.

Returns an empty string if nothing is found.

Returns `undefined` the parameters passed to
the function are not two strings.

#### Parameters
`str`*{string}*: Base string<br/>
`separator`*{string}*: String to be found<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
afterLast("parallelepiped", "le");

// => "piped"
```

<a name="beforeFirst"></a>
### `beforeFirst(str, separator)`

Given two strings, returns a new one formed
by the characters **before the first
occurrence** of the second string in the first.

Returns an empty string if nothing is found.

Returns `undefined` the parameters passed to
the function are not two strings.

#### Parameters
`str`*{string}*: Base string<br/>
`separator`*{string}*: String to be found<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
beforeFirst("parallelepiped", "le");

// => "paral"
```

<a name="beforeLast"></a>
### `beforeLast(str, separator)`

Given two strings, returns a new one formed
by the characters **before the last
occurrence** of the second string in the first.

Returns an empty string if nothing is found.

Returns `undefined` the parameters passed to
the function are not two strings.

#### Parameters
`str`*{string}*: Base string<br/>
`separator`*{string}*: String to be found<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
beforeLast("parallelepiped", "le");

// => "paralle"
```


