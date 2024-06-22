const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not_found')
const errorHandlerMiddleware = require('./middleware/error_handler')
app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, console.log(`Server is listening on port ${PORT}...`))
  } catch (error) {
    console.log(error)
  }
}

start()