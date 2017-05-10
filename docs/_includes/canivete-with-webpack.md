### Using Canivete with [Webpack](https://webpack.js.org/)

**1.** In your project root folder, install Canivete via NPM.

```shell
$ npm install --save leofavre/canivete
```

**2.** Install Webpack via NPM.

```shell
$ npm install --save-dev webpack
```

**3.** Create a file named "webpack.config.js" with the following content:

```js
const path = require("path");

module.exports = {
	"entry": "./index.js",
	"output": {
		"path": path.resolve(__dirname, "dist"),
		"filename": "app.js"
	}
};
```

**4.** Create a file named "index.js". Import any dependencies from Canivete using ES6 module syntax before the rest of your code, like this:

```js
import toAverage from "canivete/dist/toAverage";

const myArray = [8, 10, 12, 14, 16];
alert(myArray.reduce(toAverage));
// => 12
```

**5.** Use the following shell command to build your project:

```shell
$ ./node_modules/.bin/webpack
```
