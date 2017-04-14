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

Atrasa o encadeamento de uma Promise por um tempo
determinado.

#### Parameters
`[delay = 0]`*{number}*: Atraso em milisegundos<br/>

#### Returns
*{Promise}*<br/>

#### Example

```javascript
Promise.resolve("aguardando")
	.then(waitInPromise(500))
	.then(console.log);

// => "aguardando"
// mostrado depois de 500 milisegundos.
```

## String

<a name="afterFirst"></a>
### `afterFirst(str, separator)`

Dadas duas strings – sentença e delimitador –,
retorna uma string com os caracteres **posteriores
à primeira ocorrência** do delimitador na sentença.
Caso o delimitador não seja encontrado, retorna
uma string vazia.

#### Parameters
`str`*{string}*: Senteça<br/>
`separator`*{string}*: Delimitador<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
afterFirst("paralelepípedo", "le");

// => "lepípedo"
```

<a name="afterLast"></a>
### `afterLast(str, separator)`

Dadas duas strings – sentença e delimitador –,
retorna uma string com os caracteres **posteriores
à última ocorrência** do delimitador na sentença.
Caso o delimitador não seja encontrado, retorna
uma string vazia.

#### Parameters
`str`*{string}*: Senteça<br/>
`separator`*{string}*: Delimitador<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
afterLast("paralelepípedo", "le");

// => "pípedo"
```

<a name="beforeFirst"></a>
### `beforeFirst(str, separator)`

Given two strings, returns a new string formed
by the characters **previous to the first
occurrence** of the second string in the first.

If nothing is not found, returns an empty string.

Returns `undefined` if two strings are not
passed as parameters.

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

Given two strings, returns a new string formed
by the characters **previous to the last
occurrence** of the second string in the first.

If nothing is not found, returns an empty string.

Returns `undefined` if two strings are not
passed as parameters.

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


