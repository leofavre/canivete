## About

Canivete (Brazilian Portuguese for swiss army knife) is an on-going personal project, a place to keep generic, multi-purpose Javascript functions.

Due to its multi-purpose nature, Canivete is not distributed as a single file, instead, one should import its functions as needed, using [ES6 modules syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

[Babel](https://babeljs.io/) and [Babel Polyfill](https://babeljs.io/docs/usage/polyfill/) are recommended to make Canivete work in older browsers.

> [Canivete on Github](https://github.com/leofavre/canivete/)
> [Documentation](https://leofavre.github.io/canivete/)

## Usage

Since ES6 `import` has virtually [no browser support](https://caniuse.com/#feat=es6-module) at this time, a module bundler is needed to handle Canivete dependencies.

Here's how to use Canivete with [Rollup](https://github.com/leofavre/canivete-with-rollup) and [Webpack](https://github.com/leofavre/canivete-with-webpack).
