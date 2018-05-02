let path = require('path')
let express = require('express')
let webpack = require('webpack')
let webpackDevMiddleware = require('webpack-dev-middleware')
let config = require('./webpack.config.js')

let compiler = webpack(config)

let app = express()

// tell express server to use webpack middleware
// use webpack config file as a base
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'))
})

let port = 3000

app.listen(port, () => {
  console.log(`listening on *:${port}`)
})

