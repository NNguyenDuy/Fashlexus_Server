import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes'
import testConnectDB from './src/config/connectDatabase'

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
  })
)

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
initRoutes(app)
testConnectDB()

const port = process.env.PORT1 || 5001
const listener = app.listen(port, () => {
  console.log(
    `Server listing port: http://localhost:${listener.address().port}`
  )
})