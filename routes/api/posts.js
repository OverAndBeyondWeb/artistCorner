const router = require('express').Router();

const db = require('../../models');

const passport = require('passport');

router.post('/',  passport.authenticate('jwt', {session: false}), (req, res) => {
  //TODO: handle validation errors

  let postData = {};
  postData.user = req.user.id
  for(let key in req.body) {
    postData[key] = req.body[key];
  }
  console.log(req.body);
  console.log(postData);
  db.Post.create(postData)
  .then(post => {
    res.status(200).json(post);
  })
  .catch(err => console.log(err))
});

module.exports = router;
