var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  comment: String,
  createdAt: Date,
  author: String,
  postId: String,
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
