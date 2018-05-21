const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: {
    type: String
  },
  bio: {
    type: String
  },
  portfolioLink: {
    type: String
  },
  favoriteMedium: {
    type: String
  }
});