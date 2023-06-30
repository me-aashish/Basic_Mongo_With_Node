const express = require('express');
const router = express.Router();
const tweetController = require('../../controllers/tweet-controller');
const likeController = require('../../controllers/like-controller');

router.post('/tweet', tweetController.create);

router.post('/likes/toogle', likeController.toogleLike);

module.exports = router