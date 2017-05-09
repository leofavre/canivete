### Using Canivete with [Webpack](https://webpack.js.org/)

In your project root folder, install Canivete via NPM.

```shell
$ npm install --save leofavre/canivete
```

Install Webpack via NPM.

```shell
$ npm install --save-dev webpack
```

Create a file named "webpack.config.js" with the following content:

```js
const path = require("path");

module.exports = {
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.js"
	}
};
```

Create a file named "index.js". Import any dependencies from Canivete (or other libraries) using ES6 modules syntax before the rest of your code, like this:

```js
import toAverage from "canivete/dist/toAverage";

const myArray = [8, 10, 12, 14, 16];
alert(myArray.reduce(toAverage));
// => 12
```

Use the following shell command to build your project:

```shell
$ ./node_modules/.bin/webpack
```
