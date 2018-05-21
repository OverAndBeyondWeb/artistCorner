//create an express router instance
const router = require('express').Router();
// reference the models
const db = require('../../models');

// route to find a user from passed in email
router.post('/', (req, res) => {
  db.User.findOne({email: req.body.email})
    .then(resp => res.json(resp))
    .catch(err => console.log(err));
});

module.exports = router;
