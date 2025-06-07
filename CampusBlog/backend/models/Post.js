const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 200,
  },
  date: {
    type: Date,
    default: Date.now, // defaults to current date/time if not provided
  },
  content: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // references User model
    required: true,
  },
});

module.exports = mongoose.model('Post', PostSchema);
