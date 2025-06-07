const Post = require('../models/Post');

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log('user in controller', req.user);
    const userId = req.user.id; // Get user ID from the decoded token - matches the token payload

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const post = new Post({
      title,
      content,
      owner: userId, // Use the authenticated user's ID
      date: new Date(),
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all posts or a specific post by ID
exports.getPost = async (req, res) => {
  const { postId } = req.params;

  try {
    if (postId) {
      // Get one post by ID
      const post = await Post.findById(postId).populate('owner', 'username -_id');
      if (!post) return res.status(404).json({ message: 'Post not found' });
      return res.json(post);
    } else {
      // Get all posts, sorted by date (newest first)
      const posts = await Post.find()
        .populate('owner', 'username -_id')  // explicitly exclude _id
        .sort({ date: -1 });
      return res.json(posts);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get posts of a user
exports.getMyPosts = async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from the decoded token
    const posts = await Post.find({ owner: userId })
      .populate('owner', 'username -_id')
      .sort({ date: -1 }); // Sort by date, newest first
    
    return res.json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, content } = req.body;

  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (title) post.title = title;
    if (content) post.content = content;
    post.date = new Date(); // update the date to today's date

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findByIdAndDelete(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
