const MONGODB_URI = 'mongodb://localhost/artistcorner' || process.env.MONGO_URI;

module.exports = {
  MONGODB_URI: MONGODB_URI,
  SECRET: process.env.SECRET 
};

