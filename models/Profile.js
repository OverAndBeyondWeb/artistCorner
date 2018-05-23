const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: {
    type: String
  },
  bio: {
    type: String
  },
  links: {
    type: String
  },
  favoriteMedium: {
    type: String
  },
  favoritePosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'posts'
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});