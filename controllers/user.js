// reference the models
const db = require('../models');

// reference gravatar package
const gravatar = require('gravatar');

// reference bcryptjs
const bcrypt = require('bcryptjs');

// reference jsonwebtoken
const jwt = require('jsonwebtoken');

module.exports.registerUser = (req, res) => {
  console.log(req.body)

  db.User.findOne({email:req.body.email})
    .then(user => {
      // Check that username and email do not already exist in database
      if(user) {
        let errors = {};
        errors.email = 'Email already exists';
        errors.username = 'Username already exists';
        return res.status(400).json({errors});
      };

      // user gravatar to grab user's avatar
      const avatar = gravatar.url(req.body.url, {
        s: '200',
        r: 'pg',
        d: 'mm' 
      });

      // create new user object
      const newUser = new db.User({
        username: req.body.username,
        email: req.body.email,
        avatar,
        password: req.body.password 
      });
      
      // hash password then save user in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => res.status(200).json({user}))
            .catch(err => console.log(err));
        });
      });
    })
    .catch(err => console.log(err));
}

module.exports.loginUser = (req, res) => {
  db.User.findOne({email: req.body.email})
    .then(user => {
      if(!user) {
        res.status(400).json({message: 'User not found'})
      } else {

        // compare passed in password to hasshed password in database
        bcrypt.compare(req.body.password, user.password)
        .then(isMatch => {
          if(isMatch) {

            const payload = {
              id: user._id,
              name: user.name,
              email: user.email,
              avatar: user.avatar
            };

            jwt.sign(payload, require('../config/keys').SECRET, {expiresIn: 3600}, (err, token) => {
              if(err) throw err;
              res.status(200).json({
                success: true,
                user: user,
                token
              });
            });
          } else {
            res.status(400).json({message: 'Incorrect password'})
          }
        })
        .catch();
      }
    })
    .catch(err => console.log(err));
}