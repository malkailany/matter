const router = require('express').Router()
const PostController = require('../controllers/postController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
// route that handles user uploading/changing their profile image
//add auth
router.post('/new', auth, PostController.new)
router.delete('/delete',auth, PostController.delete)
router.patch('/edit',auth, PostController.edit)

router.get('/', PostController.getAllPosts)

module.exports = router
