# euphrates
Euphrates is a WebVR playground using the BabylonJS library. Out of the box, Euphrates implements the getting started example from the BabylonJS library. Jump right in to the source code and start adding meshes to your 3D canvas with JavaScript.

Euphrates is an extension of [knapsack](https://github.com/seanmross/knapsack). Knapsack features a simple underlying Babel, Express, & Webpack server that transpiles and bundles ES2017 JavaScript for a quick and easy development experience.

### Features
+ [Babel](https://github.com/babel/babel/tree/master/packages/babel-cli) - `babel-preset-env` module for ES2017/ES2016 -> ES2015 JavaScript transpilation.
+ [Express](https://github.com/expressjs/express) - `express` module for building a minimal and easily configurable web server.
+ [Webpack](https://github.com/webpack/webpack) - use `webpack` to bundle your source code into one file. In conjunction with `webpack-dev-middleware` module, webpack will automatically emit files it processes to a server.
+ [WebGL](https://github.com/KhronosGroup/WebGL) - Web Graphics Library is a JavaScript API exposed through HTML5 `<canvas>` elements 
+ [BabylonJS](https://github.com/BabylonJS/Babylon.js) - use `BabylonJS` modules to easily build 3D scenes and meshes

### Get started
+ clone the repo
+ `cd euphrates`
+ `npm i`
+ `npm run server`
+ navigate to `localhost:3000` in your browser
+ get started building your app in the `src` directory
+ update and save JavaScript source files and the knapsack web server will automatically compile and reload
