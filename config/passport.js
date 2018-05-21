const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;

const db = require('../models');

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = require('./keys').SECRET;

module.exports = (passport) => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    db.User.findOne({id: jwt_payload.id})
      .then(user => {
        if(user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      })
      .catch(err => console.log(err))
  }));
};