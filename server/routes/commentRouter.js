const router = require('express').Router()
const CommentController = require('../controllers/CommentController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
// route that handles user uploading/changing their profile image
//add auth
router.post('/new', auth, CommentController.new)
router.delete('/delete',auth, CommentController.delete)
router.patch('/edit',auth, CommentController.edit)
router.get('/', CommentController.getAllPosts)

module.exports = router
