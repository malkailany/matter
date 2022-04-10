const mongoose = require('mongoose')

// mongoose user schema, states fields users have
const postSchema = new mongoose.Schema(
  {
    publisher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users'
    },
    post: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('posts', postSchema)
