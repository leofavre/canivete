### Using Canivete with [Rollup](https://rollupjs.org/)

**1.** In your project root folder, install Canivete via NPM.

```shell
$ npm install --save leofavre/canivete
```

**2.** Install Rollup globally via NPM.

```shell
$ npm install --global rollup
```

**3.** Install the Node Resolve Pulgin for Rollup via NPM.

```shell
$ npm install --save-dev rollup-plugin-node-resolve
```

**4.** Create a file named "rollup.config.js" with the following content:

```js
import nodeResolve from "rollup-plugin-node-resolve";

export default {
	"entry": "./index.js",
	"dest": "./dist/app.js",
	"plugins": [nodeResolve()],
	"format": "es"
};
```

**5.** Create a file named "index.js". Import any dependencies from Canivete using ES6 module syntax before the rest of your code, like this:

```js
import toAverage from "canivete/dist/toAverage";

const myArray = [8, 10, 12, 14, 16];
alert(myArray.reduce(toAverage));
// => 12
```

**6.** Use the following shell command to build your project:

```shell
$ rollup -c
```
