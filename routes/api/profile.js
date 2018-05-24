const router = require('express').Router();

const mongoose = require('mongoose');

const db = require('../../models');

const passport = require('passport');

router.get('/:username', passport.authenticate('jwt', {session: false}), (req, res) => {
  db.Profile.findOne({user: req.user.id})
    .then(profile => {
      res.json(profile);
    })
    .catch(err => console.log(err));
});

module.exports = router;

router.post('/:username', passport.authenticate('jwt', {session: false}), (req, res) => {
  //TODO: handle validation errors

  let profileData = {};
  profileData.user = req.user.id
  for(let key in req.body) {
    profileData[key] = req.body[key];
  }
  console.log(req.body);
  console.log(profileData);
  db.Profile.create(profileData)
  .then(profile => {
    res.status(200).json(profile);
  })
  .catch(err => console.log(err))
})