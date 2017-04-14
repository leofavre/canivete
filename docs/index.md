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

#### Returns

#### Example

```javascript
Promise.resolve(&#34;aguardando&#34;)
	.then(waitInPromise(500))
	.then(console.log);

// =&gt; &#34;aguardando&#34;
// mostrado depois de 500 milisegundos.
```

## String

<a name="afterFirst"></a>
### `afterFirst(str, delimiter)`

Dadas duas strings – sentença e delimitador –, retorna uma string com os caracteres **posteriores à primeira ocorrência** do delimitador na sentença. Caso o delimitador não seja encontrado, retorna uma string vazia.

#### Parameters

#### Returns

#### Example

```javascript
afterFirst(&#34;paralelepípedo&#34;, &#34;le&#34;);

// =&gt; &#34;lepípedo&#34;
```

<a name="afterLast"></a>
### `afterLast(str, delimiter)`

Dadas duas strings – sentença e delimitador –, retorna uma string com os caracteres **posteriores à última ocorrência** do delimitador na sentença. Caso o delimitador não seja encontrado, retorna uma string vazia.

#### Parameters

#### Returns

#### Example

```javascript
afterLast(&#34;paralelepípedo&#34;, &#34;le&#34;);

// =&gt; &#34;pípedo&#34;
```

<a name="beforeFirst"></a>
### `beforeFirst(str, delimiter)`

Dadas duas strings – sentença e delimitador –, retorna uma string com os caracteres **anteriores à primeira ocorrência** do delimitador na sentença. Caso o delimitador não seja encontrado, retorna uma string vazia.

#### Parameters

#### Returns

#### Example

```javascript
beforeFirst(&#34;paralelepípedo&#34;, &#34;le&#34;);

// =&gt; &#34;para&#34;
```

<a name="beforeLast"></a>
### `beforeLast(str, delimiter)`

Dadas duas strings – sentença e delimitador –, retorna uma string com os caracteres **anteriores à última ocorrência** do delimitador na sentença. Caso o delimitador não seja encontrado, retorna uma string vazia.

#### Parameters

#### Returns

#### Example

```javascript
beforeLast(&#34;paralelepípedo&#34;, &#34;le&#34;);

// =&gt; &#34;parale&#34;
```


