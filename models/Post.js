const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  attachment: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;