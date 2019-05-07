const express = require('express')
const auth = require('http-auth')
const serveStatic = require('serve-static')

const app = express()

const basic = auth.basic(
  {
    realm: 'fail'
  },
  (username, password, callback) => {
    callback(username === 'andy' && password === 'special')
  }
)

const authMiddleware = auth.connect(basic)

app.use('/', authMiddleware, serveStatic('./storybook-static'))
app.use('/', authMiddleware, serveStatic('../app/static'))

const port = process.env.PORT || 5000
app.listen(port)
