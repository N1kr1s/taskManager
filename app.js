const express = require('express')
const app = express()
const PORT = 3000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()


app.use(express.json())



app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})


app.use('/api/v1/tasks', tasks)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, console.log(`Server is listening on port ${PORT}...`))
  } catch (error) {
    console.log(error)
  }
}

start()