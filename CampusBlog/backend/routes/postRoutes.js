const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new post (protected route)
router.post('/', authMiddleware, postController.createPost);

// Get all posts
router.get('/', postController.getPost);

// Get authenticated user's posts
router.get('/myposts', authMiddleware, postController.getMyPosts);

// Get a specific post by ID
router.get('/:postId', postController.getPost);

// Update a post by ID
router.put('/:postId', authMiddleware, postController.updatePost);

// Delete a post by ID
router.delete('/:postId', postController.deletePost);

module.exports = router;
