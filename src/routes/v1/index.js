const express = require('express');
const router = express.Router();
const tweetController = require('../../controllers/tweet-controller');
const likeController = require('../../controllers/like-controller');
const commentController = require('../../controllers/comment-controller');

router.post('/tweet', tweetController.create);

router.post('/likes/toogle', likeController.toogleLike);

router.post('/comments', commentController.create);

router.get('/tweets/:id', tweetController.get)

module.exports = router