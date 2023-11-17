const express = require('express');
const router = express.Router();


const {likePost,unlikePost} = require('./../controllers/likeController');
// router.get('/dummy',dummyLink);

const {createComment} = require('../controllers/commentController');
router.post('/comments/create',createComment);   

const {createPost,getAllPosts} = require('../controllers/postController');
router.post('/posts/create',createPost);

router.get('/posts',getAllPosts);

router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost);

module.exports = router;