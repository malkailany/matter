const PostModal = require('../models/postModal')
const UserModal = require('../models/userModel')
const fetch = require('node-fetch')

const { CLIENT_URL } = process.env
const userController = {
  getAllPosts: async (req, res) => {
    try {
      const allPosts = await PostModal.find()
        .sort('-createdAt')
        .populate('publisher', { username: 1, name: 1, avatar: 1 })
        .select('post createdAt')
      res.send(allPosts)
    } catch (error) {
      console.log(error)
    }
  },
  new: async (req, res) => {
    try {
      const { post } = req.body
      const id = req.user.id //check expiry
      if (!post) {
        throw err
      }
      const Post = new PostModal({
        publisher: id,
        post
      })

      const savedData = await Post.save()
      const postInfo = await PostModal.findById(savedData._id)
        .populate('publisher', { username: 1, name: 1, avatar: 1 })
        .select('post createdAt')
      res.json({
        msg: 'got your post from the backend!',
        post: postInfo
      })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  delete: async (req, res) => {
    try {
      const postId = req.body.data._id
      const publisherId = req.body.data.publisher._id

      if (req.user.id == publisherId) {
        //if the user that is logged in the same user as the publisher
        await PostModal.findOneAndDelete({
          _id: postId,
          publisher: publisherId
        })
        //delete the post when both post id and publisher id has met the condition
        res.json({
          msg: 'Post has been deleted by self user'
        })
      } else if (
        //else it must be an admin so we check
        await UserModal.findById(req.user.id, function (err, doc) {
          if (doc.role == 1) return true
          return false
        })
      ) {
        await PostModal.findByIdAndDelete({
          _id: postId
        })
        res.json({
          msg: 'Post has been deleted by the admin!'
        })
      }
    } catch (error) {
      console.log(error)
    }
  },
  edit: async (req, res) => {
    console.log(req.body)

    try {
      const postId = req.body.data._id
      const publisherId = req.body.data.publisher._id
      const post = req.body.post
      if (req.user.id == publisherId) {
        //if the user that is logged in the same user as the publisher
        await PostModal.findOneAndUpdate(
          {
            _id: postId,
            publisher: req.user.id
          },
          { post }
        )
        //delete the post when both post id and publisher id has met the condition
        res.json({
          msg: 'Post has been updated!'
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = userController
