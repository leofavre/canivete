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

Atrasa o encadeamento de uma Promise por um tempo determinado.

#### Parameters
`[delay = 0]`*{number}*: Tempo do atraso em milisegundos<br/>

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
### `afterFirst(str, delimiter)`

Dadas duas strings – sentença e delimitador –, retorna uma string com os caracteres **posteriores à primeira ocorrência** do delimitador na sentença. Caso o delimitador não seja encontrado, retorna uma string vazia.

#### Parameters
`str`*{string}*: Senteça<br/>
`delimiter`*{string}*: Delimitador<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
afterFirst("paralelepípedo", "le");

// => "lepípedo"
```

<a name="afterLast"></a>
### `afterLast(str, delimiter)`

Dadas duas strings – sentença e delimitador –, retorna uma string com os caracteres **posteriores à última ocorrência** do delimitador na sentença. Caso o delimitador não seja encontrado, retorna uma string vazia.

#### Parameters
`str`*{string}*: Senteça<br/>
`delimiter`*{string}*: Delimitador<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
afterLast("paralelepípedo", "le");

// => "pípedo"
```

<a name="beforeFirst"></a>
### `beforeFirst(str, delimiter)`

Dadas duas strings – sentença e delimitador –, retorna uma string com os caracteres **anteriores à primeira ocorrência** do delimitador na sentença. Caso o delimitador não seja encontrado, retorna uma string vazia.

#### Parameters
`str`*{string}*: Senteça<br/>
`delimiter`*{string}*: Delimitador<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
beforeFirst("paralelepípedo", "le");

// => "para"
```

<a name="beforeLast"></a>
### `beforeLast(str, delimiter)`

Dadas duas strings – sentença e delimitador –, retorna uma string com os caracteres **anteriores à última ocorrência** do delimitador na sentença. Caso o delimitador não seja encontrado, retorna uma string vazia.

#### Parameters
`str`*{string}*: Senteça<br/>
`delimiter`*{string}*: Delimitador<br/>

#### Returns
*{string}*<br/>

#### Example

```javascript
beforeLast("paralelepípedo", "le");

// => "parale"
```


