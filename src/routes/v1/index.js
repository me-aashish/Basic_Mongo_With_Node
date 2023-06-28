const express = require('express');
const router = express.Router();
const tweetController = require('../../controllers/tweet-controller');

router.post('/tweet', tweetController.create);

module.exports = router