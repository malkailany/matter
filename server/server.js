require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(
  fileUpload({
    useTempFiles: true
  })
)

// routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/uploadRouter'))

// connect to mongodb
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      throw err
    }
    app.listen(PORT, () => {
      console.log('Server is running on port ', PORT)
    })
    console.log('Connected to MongoDB')
  }
)

const PORT = process.env.PORT || 5000
