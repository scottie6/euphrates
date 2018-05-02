const path = require('path')

module.exports = {
  devServer: {
    contentBase: './dist'
  },
  // use inline-source-map for explicit error handling
  devtool: 'inline-source-map',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: 'development',
  // use babel-loader to transpile to browser-compatible ES5
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  stats: {
    colors: true
  }
}

