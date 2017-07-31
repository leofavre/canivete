---
layout: default
title: Canivete
---

## *BEM*

>[formatBemClass](#formatbemclass), [modifyBemClass](#modifybemclass) &amp;&nbsp;[modifyBemClassCompact](#modifybemclasscompact)

### <a name="formatbemclass">`formatBemClass (block, [element], [modifier], [value], delimiters)`</a>

Formats a CSS class according to the
[BEM methodology](https://en.bem.info/methodology/).
The function receives a block, an element, a modifier, a value
for the modifier and an array of BEM delimiters, e.g. `__`,
`--` and `-`.

#### Parameters

| Name | Default | Type | Description |
| --- | --- | --- | --- |
| `block` |  | String | The BEM block. |
| `element` |  | String | The BEM element. **optional** |
| `modifier` |  | String | The BEM modifier. **optional** |
| `value` | `true` | String<br>Number<br>Boolean | The BEM modifier value. **optional** |
| `delimiters` |  | Array.&lt;String&gt; | The BEM delimiters. |

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

### <a name="modifybemclass">`modifyBemClass (domEl, bemObj, delimiters)`</a>

Modifies the CSS classes from a DOM element according
to the [BEM methodology](https://en.bem.info/methodology/).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEl` | HTMLElement | The DOM element. |
| `bemObj` | BemObject | The object describing BEM class changes (see table below). |
| `delimiters` | Array | The BEM delimiters. |

#### BemObject

| Name | Type | Description |
| --- | --- | --- |
| `name` | Object | An object which key is a BEM block or element, e.g. `menu` or `landing__area`. |
| `name.modifier` | Object | An object representing a modifiers and their values, e.g.&nbsp;`{active: false}` or `{level: 42}`. |

#### Example

```javascript
let domEl = document.createElement("div"),
	delimiters = ["__", "--", "-"];

modifyBemClass(domEl, {
	"swiper": {
		"slides": 5,
		"current": 2,
		"playing": true
	}
}, delimiters);

domEl.className;
// => "swiper swiper--slides-5 swiper--current-2 swiper--playing"

modifyBemClass(domEl, {
	"swiper": {
		"current": 3,
		"playing": false
	}
}, delimiters);

domEl.className;
// => "swiper swiper--slides-5 swiper--current-3"
```

### <a name="modifybemclasscompact">`modifyBemClassCompact (domEl, bemObj, delimiters)`</a>

Modifies the CSS classes from a DOM element according
to the [BEM methodology](https://en.bem.info/methodology/).
Unlike [`modifyBemClass()`](#modifybemclass), it ommits the original block
or element CSS class if a modified version is output.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEl` | HTMLElement | The DOM element. |
| `bemObj` | BemObject | The object describing BEM class changes (see table below). |
| `delimiters` | Array | The BEM delimiters. |

#### BemObject

| Name | Type | Description |
| --- | --- | --- |
| `name` | Object | An object which key is a BEM block or element, e.g. `menu` or `landing__area`. |
| `name.modifier` | Object | An object representing a modifiers and their values, e.g.&nbsp;`{active: false}` or `{level: 42}`. |

#### Example

```javascript
let domEl = document.createElement("div"),
	delimiters = ["__", "--", "-"];

modifyBemClassCompact(domEl, {
	"swiper": {
		"slides": 5,
		"current": 2,
		"playing": true
	}
}, delimiters);

domEl.className;
// => "swiper--slides-5 swiper--current-2 swiper--playing"

modifyBemClassCompact(domEl, {
	"swiper": {
		"current": 3,
		"playing": false
	}
}, delimiters);

domEl.className;
// => "swiper--slides-5 swiper--current-3"
```

## *ClassName*

>[addClass](#addclass), [hasClass](#hasclass) &amp;&nbsp;[removeClass](#removeclass)

### <a name="addclass">`addClass (domEls, className)`</a>

Adds a CSS class to one or more DOM elements.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEls` | HTMLElement<br>HTMLCollection<br>NodeList<br>Array.&lt;HTMLElement&gt;<br>Set.&lt;HTMLElement&gt; | One or more DOM elements. |
| `className` | String | The CSS class name. |

#### Examples

```javascript
let oneElement = document.querySelector("a");
addClass(oneElement, "link");

oneElement.className;
// => "link"
```

```javascript
let manyElements = document.querySelectorAll("a");
addClass(manyElements, "link");

manyElements[0].className;
// => "link"
```

### <a name="hasclass">`hasClass (domEl, className)`</a>

Verifies if a DOM element has a CSS class.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEl` | HTMLElement | The DOM element. |
| `className` | String | The CSS class name. |

#### Return

| Type | Description |
| --- | --- |
| Boolean | Whether the element has the CSS class name. |

#### Example

```javascript
let oneElement = document.querySelector("a");
oneElement.className = "link reference";

hasClass(oneElement, "link");
// => true

hasClass(oneElement, "button");
// => false
```

### <a name="removeclass">`removeClass (domEls, className)`</a>

Removes a CSS class from one or more DOM elements.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEls` | HTMLElement<br>HTMLCollection<br>NodeList<br>Array.&lt;HTMLElement&gt;<br>Set.&lt;HTMLElement&gt; | One or more DOM elements. |
| `className` | String | The CSS class name. |

#### Examples

```javascript
let oneElement = document.querySelector(".link.base");
removeClass(oneElement, "link");

oneElement.className;
// => "base"
```

```javascript
let manyElements = document.querySelectorAll(".link.base");
removeClass(manyElements, "link");

manyElements[0].className;
// => "base"
```

## *Collection*

>[deepGroupBy](#deepgroupby)

### <a name="deepgroupby">`deepGroupBy (collection, [...iteratees])`</a>

Groups the contents of an array by one or more iteratees.
This function is similar to Lodash
[`groupBy()`](https://lodash.com/docs/4.17.4#groupBy),
except it can create nested groups but cannot receive
strings for iteratees.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `collection` | Array | The original array. |
| `...iteratees` | Function | The functions used to group the array of objects by their results. **optional** |

#### Return

| Type | Description |
| --- | --- |
| Object | The resulting object. |

#### Examples

```javascript
const getLength = str => str.length;
const getFirstLetter = str => str.slice(0, 1);

deepGroupBy(["one", "two", "three"], getLength, getFirstLetter);
// => {
// => 	"3": {"o": ["one"], "t": ["two"]},
// => 	"5": {"t": ["three"]}
// => }
```

```javascript
const getLength = str => str.length;
const getFirstLetter = str => str.slice(0, 1);

deepGroupBy(["one", "two", "three"], getFirstLetter, getLength);
// => {
// => 	"o": {"3": ["one"]},
// => 	"t": {"3": ["two"], "5": ["three"]}
// => }
```

```javascript
const stores = [{
	"name": "Iguatemi",
	"city": "Campinas",
	"state": "SP"
}, {
	"name": "Jardins",
	"city": "São Paulo",
	"state": "SP"
}, {
	"name": "Iguatemi",
	"city": "São Paulo",
	"state": "SP"
}, {
	"name": "Pedras",
	"city": "Búzios",
	"state": "RJ"
}, {
	"name": "Ipanema",
	"city": "Rio de Janeiro",
	"state": "RJ"
}, {
	"name": "Leblon",
	"city": "Rio de Janeiro",
	"state": "RJ"
}, {
	"name": "ParkShopping",
	"city": "Brasília",
	"state": "DF"
}];

const getStateName = item => item.state;
const getCityName = item => item.city;

deepGroupBy(stores, getStateName, getCityName);
// => {
// => 	"SP": { "Campinas": [...], "São Paulo": [...] },
// => 	"RJ": { "Búzios": [...], "Rio de Janeiro": [...] },
// => 	"DF": { "Brasília": [...] }
// => }
```

## *DOM*

>[getAttr](#getattr), [parents](#parents), [removeAttr](#removeattr), [removeAttrs](#removeattrs), [selfAndParents](#selfandparents), [setAttr](#setattr) &amp;&nbsp;[setAttrs](#setattrs)

### <a name="getattr">`getAttr (domEl, attrName)`</a>

Gets a DOM element attribute using native
[`Element.getAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute),
except that the presence of an attribute without
a value will return `true` instead of an empty string,
and the absence will return `false`. The function also
deals with boolean values using old HTML4 syntax,
like `<option selected="selected">`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEl` | HTMLElement | The DOM element. |
| `attrName` | String | The attribute name. |

#### Return

| Type | Description |
| --- | --- |
| String<br>Boolean | The attribute value. |

#### Examples

```javascript
// HTML5 syntax
let inputElement = createDomElement('<input type="checkbox" checked>');

getAttr(inputElement, "checked");
// => true
```

```javascript
// HTML4 syntax
let inputElement = createDomElement('<input type="checkbox" checked="checked"/>');

getAttr(inputElement, "checked");
// => true
```

```javascript
let videoElement = createDomElement('<video src="video.mp4" controls>');

getAttr(videoElement, "src");
// => "video.mp4"

getAttr(videoElement, "controls");
// => true

getAttr(videoElement, "muted");
// => false
```

### <a name="parents">`parents (domEl)`</a>

Returns all parents of a DOM element,
from the closest to the most distant.

#### Parameter

| Name | Type | Description |
| --- | --- | --- |
| `domEl` | HTMLElement | The DOM element. |

#### Return

| Type | Description |
| --- | --- |
| Array.&lt;HTMLElement&gt; | The DOM element parents. |

#### Example

```javascript
let domChild = document.createElement("div"),
	domParent = document.createElement("div"),
	domGrandparent = document.createElement("div"),
	body = document.body,
	html = document.querySelector("html");

domParent.appendChild(domChild);
domGrandparent.appendChild(domParent);
body.appendChild(domGrandparent);

parents(domChild);
// => [domParent, domGrandparent, body, html, document]
```

### <a name="removeattr">`removeAttr (domEls, attrName)`</a>

Removes an attribute from one or more DOM elements using native
[`Element.removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEls` | HTMLElement<br>HTMLCollection<br>NodeList<br>Array.&lt;HTMLElement&gt;<br>Set.&lt;HTMLElement&gt; | One or more DOM elements. |
| `attrName` | String | The attribute name. |

#### Examples

```javascript
let oneElement = createDomElement('<p data-level="42">Level 42</p>');

removeAttr(oneElement, "data-level");

oneElement.getAttribute("data-level");
// => null

oneElement.dataset.level;
// => undefined
```

```javascript
let oneElement = createDomElement('<a class="button" href="/news">News</a>');

removeAttr(oneElement, "class");

oneElement.getAttribute("class");
// => null

oneElement.className;
// => ""
```

```javascript
let listHtml = '<ul><li class="item">A</li><li class="item">B</li></ul>';
	listElement = createDomElement(listElement),
	manyElements = listElement.querySelectorAll("li");

removeAttr(manyElements, "class");

manyElements[0].className;
// => ""

manyElements[1].className;
// => ""
```

### <a name="removeattrs">`removeAttrs (domEls, attrArr)`</a>

The same as [`removeAttr()`](#removeattr), except it takes an
array with attributes to be removed.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEls` | HTMLElement<br>HTMLCollection<br>NodeList<br>Array.&lt;HTMLElement&gt;<br>Set.&lt;HTMLElement&gt; | One or more DOM elements. |
| `attrArr` | Array.&lt;String&gt; | The array with attributes to be removed. |

#### Examples

```javascript
let oneElement = createDomElement('<p class="level" data-level="42">Level 42</p>');

removeAttrs(oneElement, ["data-level", "class"]);

oneElement.getAttribute("data-level");
// => null

oneElement.dataset.level;
// => undefined

oneElement.getAttribute("class");
// => null

oneElement.className;
// => ""
```

```javascript
let listHtml = '<ul><li class="item" data-level="1">A</li><li class="item" data-level="1">B</li></ul>',
	listElement = createDomElement(listHtml),
	manyElements = listElement.querySelectorAll("li");

removeAttrs(manyElements, ["data-level", "class"]);

manyElements[0].getAttribute("data-level");
// => null

manyElements[1].getAttribute("data-level");
// => null

manyElements[0].className;
// => ""

manyElements[1].className;
// => ""
```

### <a name="selfandparents">`selfAndParents (domEl)`</a>

The same as [`parents()`](#parents), except it includes
the DOM element itself.

#### Parameter

| Name | Type | Description |
| --- | --- | --- |
| `domEl` | HTMLElement | The DOM element. |

#### Return

| Type | Description |
| --- | --- |
| Array.&lt;HTMLElement&gt; | The DOM element and its parents. |

#### Example

```javascript
let domChild = document.createElement("div"),
	domParent = document.createElement("div"),
	domGrandparent = document.createElement("div"),
	body = document.body,
	html = document.querySelector("html");

domParent.appendChild(domChild);
domGrandparent.appendChild(domParent);
body.appendChild(domGrandparent);

selfAndParents(domChild);
// => [domChild, domParent, domGrandparent, body, html, document]
```

### <a name="setattr">`setAttr (domEls, attrName, value)`</a>

Sets an attribute for one or more DOM elements using native
[`Element.setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEls` | HTMLElement<br>HTMLCollection<br>NodeList<br>Array.&lt;HTMLElement&gt;<br>Set.&lt;HTMLElement&gt; | One or more DOM elements. |
| `attrName` | String | The attribute name. |
| `value` | String<br>Number<br>Boolean | The attribute value. |

#### Examples

```javascript
let oneElement = createDomElement('<p>Level 42</p>');

setAttr(oneElement, "data-level", 42);

oneElement.getAttribute("data-level");
// => "42"

oneElement.dataset.level;
// => "42"
```

```javascript
let oneElement = createDomElement('<a href="/news">News</a>');

setAttr(oneElement, "class", "button");

oneElement.getAttribute("class");
// => "button"

oneElement.className;
// => "button"
```

```javascript
let listElement = createDomElement('<ul><li>A</li><li>B</li><li>C</li></ul>'),
	manyElements = listElement.querySelectorAll("li");

setAttr(manyElements, "class", "item");

manyElements[0].className;
// => "item"

manyElements[1].className;
// => "item"
```

### <a name="setattrs">`setAttrs (domEls, attrObj)`</a>

The same as [`setAttr()`](#setattr), except it takes an object
with attribute name and value pairs to set one or
many attributes at once.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEls` | HTMLElement<br>HTMLCollection<br>NodeList<br>Array.&lt;HTMLElement&gt;<br>Set.&lt;HTMLElement&gt; | One or more DOM elements. |
| `attrObj` | Object | The object with attribute name and value pairs, e.g. `{ "data-level": 42 }`. |

#### Examples

```javascript
let oneElement = createDomElement('<p>Level 42</p>');

setAttrs(oneElement, {
	"data-level": 42,
	"class": "level"
});

oneElement.getAttribute("data-level");
// => "42"

oneElement.dataset.level;
// => "42"

oneElement.getAttribute("class");
// => "level"

oneElement.className;
// => "level"
```

```javascript
let listElement = createDomElement('<ul><li>A</li><li>B</li><li>C</li></ul>'),
	manyElements = listElement.querySelectorAll("li");

setAttrs(manyElements, {
	"data-level": 42,
	"class": "item"
});

manyElements[0].getAttribute("data-level");
// => "42"

manyElements[1].getAttribute("data-level");
// => "42"

manyElements[0].className;
// => "item"

manyElements[1].className;
// => "item"
```

## *Event*

>[getEventPath](#geteventpath), [ignore](#ignore), [listen](#listen) &amp;&nbsp;[trigger](#trigger)

### <a name="geteventpath">`getEventPath (evt)`</a>

Returns an array with all DOM elements affected by an event.
The function serves as a polyfill for
[`Event.composedPath()`](https://dom.spec.whatwg.org/#dom-event-composedpath).

#### Parameter

| Name | Type | Description |
| --- | --- | --- |
| `evt` | Event | The triggered event. |

#### Return

| Type | Description |
| --- | --- |
| Array.&lt;HTMLElement&gt; | The DOM elements affected by the event. |

#### Example

```javascript
let domChild = document.createElement("div"),
	domParent = document.createElement("div"),
	domGrandparent = document.createElement("div"),
	body = document.body,
	html = document.querySelector("html");

domParent.appendChild(domChild);
domGrandparent.appendChild(domParent);
body.appendChild(domGrandparent);

domChild.addEventListener("click", dealWithClick);
const dealWithClick = evt => getEventPath(evt);

// when domChild is clicked:
// => [domChild, domParent, domGrandparent, body, html, document, window]
```

### <a name="ignore">`ignore (domEls, eventStr, callback, [useCapture])`</a>

Removes one or more event listeners from one or more DOM elements at once.
The function is a wrapper for
[`Element.removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
that accepts a space-separated event names string and a group
of target DOM elements.

#### Parameters

| Name | Default | Type | Description |
| --- | --- | --- | --- |
| `domEls` |  | Window<br>HTMLDocument<br>HTMLElement<br>HTMLCollection<br>NodeList<br>Array.&lt;HTMLElement&gt;<br>Set.&lt;HTMLElement&gt; | One or more DOM elements, including `document` and `window`. |
| `eventStr` |  | String | The event names string. |
| `callback` |  | Function | The function to be ignored. |
| `useCapture` | `false` | Boolean | The event phase being listened for. **optional** |

#### Example

```javascript
let oneElement = document.querySelector("a");
let manyElements = document.querySelectorAll("a");

ignore(oneElement, "click", reactToClick, true);
ignore(manyElements, "click", reactToClick);
ignore(window, "load resize", reactToLoadAndResize);
```

### <a name="listen">`listen (domEls, eventStr, callback, [useCapture])`</a>

Adds one or more event listeners to one or more DOM elements at once.
The function is a wrapper for
[`Element.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
that accepts a space-separated event names string and a group
of target DOM elements.

#### Parameters

| Name | Default | Type | Description |
| --- | --- | --- | --- |
| `domEls` |  | Window<br>HTMLDocument<br>HTMLElement<br>HTMLCollection<br>NodeList<br>Array.&lt;HTMLElement&gt;<br>Set.&lt;HTMLElement&gt; | One or more DOM elements, including `document` and `window`. |
| `eventStr` |  | String | The event names string. |
| `callback` |  | Function | The function to be exectuted when the event is dispatched. |
| `useCapture` | `false` | Boolean | The event phase to be listened for. **optional** |

#### Example

```javascript
let oneElement = document.querySelector("a");
let manyElements = document.querySelectorAll("a");

listen(oneElement, "click", reactToClick, true);
listen(manyElements, "click", reactToClick);
listen(window, "load resize", reactToLoadAndResize);
```

### <a name="trigger">`trigger (domEl, evtName, [bubbles], [cancelable], [detail])`</a>

Triggers a custom DOM event.

#### Parameters

| Name | Default | Type | Description |
| --- | --- | --- | --- |
| `domEl` |  | Window<br>HTMLDocument<br>HTMLElement | The DOM element, including `document` and `window`. |
| `evtName` |  | String | The event name. |
| `bubbles` | `false` | Boolean | Whether the event bubbles. **optional** |
| `cancelable` | `false` | Boolean | Whether the event can be canceled. **optional** |
| `detail` |  | All | Any information passed along. **optional** |

#### Example

```javascript
let popupButton = document.querySelector(".popup__button"),
	popupLayer = document.querySelector(".popup__layer");

popupButton.addEventListener("click", evt => {
	trigger(popupLayer, "open");
});
```

## *Geometry*

>[getClippingInfo](#getclippinginfo) &amp;&nbsp;[getDistanceBetweenCoords](#getdistancebetweencoords)

### <a name="getclippinginfo">`getClippingInfo (domEl, [maskDef])`</a>

Given a DOM element, returns an object with position
and clipping information relative to a mask, defined
by the second parameter, or to the viewport, if the
second parameter is omitted.

The mask can be either a DOM element or an object
containing numeric values for "top", "bottom",
"left" and "right" properties, like a
[`DOMRect`](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `domEl` | HTMLElement | The DOM element. |
| `maskDef` | HTMLElement<br>Object | The mask definition. **optional** |

#### Return

| Type | Description |
| --- | --- |
| ClippingObject | Position and clipping information relative to a mask (see table below). |

#### ClippingObject

| Name | Type | Description |
| --- | --- | --- |
| `isOffTop` | Boolean | Above and off the mask. |
| `isOffBottom` | Boolean | Below and off the mask. |
| `isOffLeft` | Boolean | On the left and off the mask. |
| `isOffRight` | Boolean | On the right and off the mask. |
| `isOff` | Boolean | Off the mask. |
| `isClippedTop` | Boolean | Above and intersecting with the mask. |
| `isClippedBottom` | Boolean | Below and intersecting with the mask. |
| `isClippedLeft` | Boolean | On the left and intersecting with the mask. |
| `isClippedRight` | Boolean | On the right and intersecting with the mask. |
| `isClipped` | Boolean | Intersecting with the mask. |
| `isFullyVisible` | Boolean | Fully visible inside the mask. |
| `isPartiallyVisible` | Boolean | Alias for `isClipped`. |
| `isInvisible` | Boolean | Alias for `isOff`. |
| `isAsVisibleAsPossible` | Boolean | As visible as possible (the element is taller or wider than the mask). |
| `isNotAsVisibleAsPossible` | Boolean | Not as visible as possible (the element is taller or wider than the mask). |

#### Example

```javascript
let domEl = document.createElement("div");

domEl.style.position = "fixed";
domEl.style.top = "-50px";
domEl.style.left = "-50px";
domEl.style.width = "200px";
domEl.style.height = "200px";

document.body.appendChild(domEl);

let info = getClippingInfo(domEl);

info.isClippedTop;
// => true

info.isClippedLeft;
// => true

info.isFullyVisible;
// => false

info.isPartiallyVisible;
// => true

info.isInvisible;
// => false
```

### <a name="getdistancebetweencoords">`getDistanceBetweenCoords (coordA, coordB)`</a>

Calculates and returns the distance between two points,
given their cartesian coordinates, represented, each one,
by an array of numbers.

For example, the point in a plane A(x, y) should be passed
to the function as `[x, y]`. Likewise, the point in
3D space A(x, y, z) should be passed as `[x, y, z]`.

The function deals with cartesian coordinates in
[n-dimensional spaces](https://en.wikipedia.org/wiki/Euclidean_distance#n_dimensions).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `coordA` | Array.&lt;Number&gt; | An array representing a cartesian coordinate. |
| `coordB` | Array.&lt;Number&gt; | An array representing a cartesian coordinate. |

#### Return

| Type | Description |
| --- | --- |
| Number | The distance between the two cartesian coordinates. |

#### Example

```javascript
getDistanceBetweenCoords([0, 0], [3, 4]);
// => 5

getDistanceBetweenCoords([2, 1], [5, 5]);
// => 5

getDistanceBetweenCoords([2, 1, 8], [5, 5, 0]);
// => 9.433981132056603

getDistanceBetweenCoords([2], [5]);
// => 3
```

## *Promise*

>[eventAsPromise](#eventaspromise) &amp;&nbsp;[waitInPromise](#waitinpromise)

### <a name="eventaspromise">`eventAsPromise (domEl, evtName, [happened])`</a>

Transforms a DOM event into a promise.

The functions takes as parameters: a DOM element,
the name of the event to be listened for
and a function that verifies if the event has already
happened, which receives the DOM element as parameter.

Like all promises in Javascript, the function will
only fulfill once, either if the verification function
returns true or when the event occurs for the first time.

Note that the function throws an error if the first two
parameters are not a DOM element and a string.

#### Parameters

| Name | Default | Type | Description |
| --- | --- | --- | --- |
| `domEl` |  | Window<br>HTMLDocument<br>HTMLElement | The DOM element, including `document` and `window`. |
| `evtName` |  | String | The event to be listened for. |
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
	.then(doSomethingAfterChange);
```

```javascript
let imageEl = document.createElement("img");
imageEl.src = "img.jpg";
document.body.appendChild(imageEl);

eventAsPromise(imageEl, "load", imageEl => imageEl.complete)
	.then(doSomethingAfterImageLoaded);
```

### <a name="waitinpromise">`waitInPromise (delay)`</a>

Delays the chaining of a promise by a specified
time in milliseconds.

The function is curried so as to be used inside
the `.then()` method, passing along the resolved
value from the previous promise step to the next.

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
	.then(waitInPromise(1000))
	.then(doSomethingAfterOneSecond);
```

## *Random*

>[oneOutOf](#oneoutof)

### <a name="oneoutof">`oneOutOf (num)`</a>

Returns `true` approximately one out of `num` times,
randomly.

#### Parameter

| Name | Type | Description |
| --- | --- | --- |
| `num` | Number | A number greater than zero. |

#### Return

| Type | Description |
| --- | --- |
| Boolean | Returns `true` approximately one out of `num` times. |

#### Example

```javascript
oneOutOf(2);
// => true

oneOutOf(2);
// => false
```

## *Reduce*

>[toAverage](#toaverage), [toAverageProp](#toaverageprop), [toClosest](#toclosest), [toClosestProp](#toclosestprop), [toLargestProp](#tolargestprop), [toSmallestProp](#tosmallestprop) &amp;&nbsp;[toSum](#tosum)

### <a name="toaverage">`toAverage ()`</a>

When used with `[].reduce()`, returns
the average of the values in an array.

Note that reducing arrays with non-numeric values
using `toAverage()` can lead to unexpected results.
Also, note that the parentheses can be ommited.

#### Return

| Type | Description |
| --- | --- |
| Number | The average of the values in an array. |

#### Example

```javascript
[3, 5, 7, 9].reduce(toAverage());
// => 6

[3, 5, 7, 9].reduce(toAverage);
// => 6
```

### <a name="toaverageprop">`toAverageProp (path)`</a>

When used with `[].reduce()`, returns
the object in an array in which a specific property,
passed as parameter, has the closest value to the average.

If two or more results are found, the first one
is returned.

Note that the function expects the reduced array to be
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
	"city": "Rio de Janeiro",
	"temperature": 96,
	"demographics": {
		"population": 6.32
	}
}, {
	"city": "São Paulo",
	"temperature": 82.5,
	"demographics": {
		"population": 12.04
	}
}, {
	"city": "Curitiba",
	"temperature": 70,
	"demographics": {
		"population": 1.752
	}
}, {
	"city": "Florianópolis",
	"temperature": 86,
	"demographics": {
		"population": 0.249
	}
}];

// average "temperature": 83.625
// average "population": 5.09025

cities.reduce(toAverageProp("temperature"));
// => { "city": "São Paulo", [...] }

cities.reduce(toAverageProp("demographics.population"));
// => { "city": "Rio de Janeiro", [...] }
```

### <a name="toclosest">`toClosest (num)`</a>

When used with `[].reduce()`, returns
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

### <a name="toclosestprop">`toClosestProp (path, num)`</a>

When used with `[].reduce()`, returns
the object in an array in which a specific property,
passed as parameter, has the closest value to another,
also passed as parameter.

If two or more results are found, the first one
is returned.

Note that the function expects the reduced array to be
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
	"city": "Rio de Janeiro",
	"temperature": 96,
	"demographics": {
		"population": 6.32
	}
}, {
	"city": "São Paulo",
	"temperature": 82.5,
	"demographics": {
		"population": 12.04
	}
}, {
	"city": "Curitiba",
	"temperature": 70,
	"demographics": {
		"population": 1.752
	}
}, {
	"city": "Florianópolis",
	"temperature": 86,
	"demographics": {
		"population": 0.249
	}
}];

cities.reduce(toClosestProp("temperature", 75));
// => { "city": "Curitiba", [...] }

cities.reduce(toClosestProp("demographics.population", 5));
// => { "city": "Rio de Janeiro", [...] }
```

### <a name="tolargestprop">`toLargestProp (path)`</a>

When used with `[].reduce()`, returns
the object in an array in which a specific property
has the largest value.

If two or more results are found, the first one
is returned.

Note that the function expects the reduced array to be
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
	"city": "Rio de Janeiro",
	"temperature": 96,
	"demographics": {
		"population": 6.32
	}
}, {
	"city": "São Paulo",
	"temperature": 82.5,
	"demographics": {
		"population": 12.04
	}
}, {
	"city": "Curitiba",
	"temperature": 70,
	"demographics": {
		"population": 1.752
	}
}, {
	"city": "Florianópolis",
	"temperature": 86,
	"demographics": {
		"population": 0.249
	}
}];

cities.reduce(toLargestProp("temperature"));
// => { "city": "Rio de Janeiro", [...] }

cities.reduce(toLargestProp("demographics.population"));
// => { "city": "São Paulo", [...] }
```

### <a name="tosmallestprop">`toSmallestProp (path)`</a>

When used with `[].reduce()`, returns
the object in an array in which a specific property
has the smallest property.

If two or more results are found, the first one
is returned.

Note that the function expects the reduced array to be
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
	"city": "Rio de Janeiro",
	"temperature": 96,
	"demographics": {
		"population": 6.32
	}
}, {
	"city": "São Paulo",
	"temperature": 82.5,
	"demographics": {
		"population": 12.04
	}
}, {
	"city": "Curitiba",
	"temperature": 70,
	"demographics": {
		"population": 1.752
	}
}, {
	"city": "Florianópolis",
	"temperature": 86,
	"demographics": {
		"population": 0.249
	}
}];

cities.reduce(toSmallestProp("temperature"));
// => { "city": "Curitiba", [...] }

cities.reduce(toSmallestProp("demographics.population"));
// => { "city": "Florianópolis", [...] }
```

### <a name="tosum">`toSum ()`</a>

When used with `[].reduce()`, returns
the sum of the values in an array.

Note that reducing arrays with non-numeric values
using `toSum()` can lead to unexpected results.
Also, note that the parentheses can be ommited.

#### Return

| Type | Description |
| --- | --- |
| Number | The sum of the values in an array. |

#### Example

```javascript
[3, 5, 7, 9].reduce(toSum());
// => 24

[3, 5, 7, 9].reduce(toSum);
// => 24
```

## *Sort*

>[byAlphabeticalOrder](#byalphabeticalorder) &amp;&nbsp;[byProps](#byprops)

### <a name="byalphabeticalorder">`byAlphabeticalOrder ()`</a>

When used with `[].sort()`, sorts
the array in ascending alphabetical order.

Note that the parentheses can be ommited.

#### Return

| Type | Description |
| --- | --- |
| Array | The array in ascending alphabetical order. |

#### Example

```javascript
let musqueteers = ["Athos", "Porthos", "Aramis"];

musqueteers.sort(byAlphabeticalOrder());
// => ["Aramis", "Athos", "Porthos"]

musqueteers.sort(byAlphabeticalOrder);
// => ["Aramis", "Athos", "Porthos"]
```

### <a name="byprops">`byProps (...fields)`</a>

When used with `[].sort()`, returns an array of
objects sorted by one or more criteria, passed as
parameters.

Each parameter can be eitheir a path to an object
property, passed as a string, or an object containing
a path to an object property, a boolean value indicating
if the result should be reversed, and a function to
process each value before sorting.

#### Parameter

| Name | Type | Description |
| --- | --- | --- |
| `...fields` | String<br>SortField | The criteria used to sort the array of objects. |

#### SortField

| Name | Type | Description |
| --- | --- | --- |
| `path` | String | The path to the property of an object. |
| `primer` | Function | The function used to process each value before sorting. **optional** |
| `reverse` | Boolean | Whether the result should be reversed. **optional** |

#### Return

| Type | Description |
| --- | --- |
| Array.&lt;Object&gt; | The resulting array. |

#### Examples

```javascript
let places = [{
	"name": "Ipanema",
	"location": {
		"city": "Rio de Janeiro",
		"state": "RJ"
	}
}, {
	"name": "Pedras",
	"location": {
		"city": "Búzios",
		"state": "RJ"
	}
}, {
	"name": "Morumbi",
	"location": {
		"city": "São Paulo",
		"state": "SP"
	}
}];

places.sort(byProps("name"));
// Sorts places by name
// => [
// =>	{ "name": "Ipanema", [...] },
// =>	{ "name": "Morumbi", [...] },
// =>	{ "name": "Pedras", [...] }
// => ]

places.sort(byProps({ "path": "name", "reverse": true });
// Sorts places by name in reversed order
// => [
// =>	{ "name": "Pedras", [...] },
// =>	{ "name": "Morumbi", [...] },
// =>	{ "name": "Ipanema", [...] }
// => ]

places.sort(byProps("location.state", "location.city", "name"));
// Sorts places by state, city and name
// => [
// =>	{ "name": "Pedras", [...] },
// =>	{ "name": "Ipanema", [...] },
// =>	{ "name": "Morumbi", [...] }
// => ]

places.sort(byProps({ "path": "location.state", "reverse": true }, "location.city", "name"));
// Sorts places by state (in reversed order), city and name
// => [
// =>	{ "name": "Morumbi", [...] },
// =>	{ "name": "Pedras", [...] },
// =>	{ "name": "Ipanema", [...] }
// => ]
```

```javascript
let numbers = [{
	"value": 35
}, {
	"value": -20
}, {
	"value": 3
}, {
	"value": 0.8
}];

numbers.sort(byProps("value"));
// Sorts numbers by value in ascending order
// => [{ "value": -20 }, { "value": 0.8 }, { "value": 3 }, { "value": 35 }]

numbers.sort(byProps({ "path": "value", "primer": Math.abs }));
// Sorts numbers by value in ascending order but ignoring the minus sign
// => [{ "value": 0.8 }, { "value": 3 }, { "value": -20 }, { "value": 35 }]
```

## *String*

>[afterFirst](#afterfirst), [afterLast](#afterlast), [beforeFirst](#beforefirst) &amp;&nbsp;[beforeLast](#beforelast)

### <a name="afterfirst">`afterFirst (str, delimiter)`</a>

Returns the string formed by the characters **after
the first occurrence** of the delimiter in a base string.
If the delimiter is not found, the function returns `undefined`.

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

### <a name="afterlast">`afterLast (str, delimiter)`</a>

Returns the string formed by the characters **after
the last occurrence** of the delimiter in a base string.
If the delimiter is not found, the function returns `undefined`.

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

### <a name="beforefirst">`beforeFirst (str, delimiter)`</a>

Returns the string formed by the characters **before
the first occurrence** of the delimiter in a base string.
If the delimiter is not found, the function returns `undefined`.

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

### <a name="beforelast">`beforeLast (str, delimiter)`</a>

Returns the string formed by the characters **before
the last occurrence** of the delimiter in a base string.
If the delimiter is not found, the function returns `undefined`.

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

## *Time*

>[timeSince](#timesince)

### <a name="timesince">`timeSince (timestamp)`</a>

Returns the time passed since a timestamp, in milliseconds;

#### Parameter

| Name | Type | Description |
| --- | --- | --- |
| `timestamp` | Number | The time stamp. |

#### Return

| Type | Description |
| --- | --- |
| Number | Time passed since the timestamp, in milliseconds. |

#### Example

```javascript
let timestamp = +new Date(),
	result = 0;

setTimeout(() => {
	result = timeSince(timestamp);
}, 150);

result;
// => 150
// This value is approximate and may vary.
```


