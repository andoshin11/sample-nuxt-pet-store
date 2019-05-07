import * as express from 'express'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'
import router from './routes/v1'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// set header
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})

app.use(logger('dev'))
app.use('/api', router)

const port = process.env.PORT || 3010
app.listen(port)
console.log(`Express started on port ${port}`)
