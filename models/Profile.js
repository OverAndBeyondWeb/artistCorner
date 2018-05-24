const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  username: {
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

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;