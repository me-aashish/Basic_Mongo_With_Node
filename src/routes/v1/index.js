const express = require('express');
const router = express.Router();
const tweetController = require('../../controllers/tweet-controller');
const likeController = require('../../controllers/like-controller');
const commentController = require('../../controllers/comment-controller');
const userController = require('../../controllers/user-controller');
const authMiddleware = require('../../middleware/auth-request-validation')

router.post('/tweet',authMiddleware, tweetController.create);
router.get('/tweets/:id',authMiddleware, tweetController.get)

router.post('/likes/toogle',authMiddleware, likeController.toogleLike);

router.post('/comments',authMiddleware, commentController.create);

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);



module.exports = router