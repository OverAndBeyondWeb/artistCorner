const router = require('express').Router();

const db = require('../../models');

const passport = require('passport');

router.get('/', (req, res) => {
  db.User.find({})
    .then(users => {
      res.json({users});
    })
    .catch(err => console.log(err));
});

router.get('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json(req.user);
});

module.exports = router;
