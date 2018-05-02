# knapsack
Knapsack is a lean and simple Nodejs development environment using Babel, Express, & Webpack. Perfect for a playground or slimmed-down app to get you started on your next project.

Knapsack was designed to be a light-weight kit containing only the necessary plugins to transpile ES6 javascript, bundle it into one file, and serve it up via web server. I found this most useful for new js libraries I wanted to test out in a quick and easy-to-customize dev environment.  

### features
+ [Babel](https://github.com/babel/babel/tree/master/packages/babel-cli) - `babel-preset-env` module for ES2017/ES2016 -> ES2015 javascript transpilation.
+ [Express](https://github.com/expressjs/express) - `express` module for building a minimal and easily configurable web server.
+ [Webpack](https://github.com/webpack/webpack) - use `webpack` to bundle your source code into one file. In conjunction with `webpack-dev-middleware` module, webpack will automatically emit files it processes to a server.

### get started
+ clone the repo
+ `cd knapsack`
+ `npm i`
+ `npm run server`
+ navigate to `localhost:3000` in your browser
+ get started building your app in the `src` directory
+ update and save source files and the knapsack web server will automatically compile and reload
