// create an express router instance
const router = require('express').Router();

// reference the models
const db = require('../../models');

// reference gravatar package
const gravatar = require('gravatar');

// reference bcryptjs
const bcrypt = require('bcryptjs');

// reference jsonwebtoken
const jwt = require('jsonwebtoken');

// route to create a new user
router.post('/register', (req, res) => {
  db.User.findOne({email:req.body.email})
    .then(user => {
      if(user) {
        return res.status(400).json({message: 'Email already exists'});
      } else {

        // user gravatar to grab user's avatar
        const avatar = gravatar.url(req.body.url, {
          s: '200',
          r: 'pg',
          d: 'mm' 
        });

        // create new user object
        const newUser = new db.User({
          name: req.body.name,
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
      }
    })
    .catch(err => console.log(err));
});

// route to find a user from passed in email
router.post('/login', (req, res) => {
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

            jwt.sign(payload, require('../../config/keys').SECRET, {expiresIn: 3600}, (err, token) => {
              if(err) throw err;
              res.status(200).json({
                success: true,
                token
              })
            });
          } else {
            res.status(400).json({message: 'Incorrect password'})
          }
        })
        .catch();
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
