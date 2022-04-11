const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
  {
    publisher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users'
    },
    comment: {
      type: String
    }
  },
  {
    timestamps: true
  }
)
// mongoose user schema, states fields users have
const postSchema = new mongoose.Schema(
  {
    publisher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users'
    },
    post: {
      type: String
    },
    comments: [CommentSchema]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('posts', postSchema)
