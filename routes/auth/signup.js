//create an express router instance
const router = require('express').Router();
// reference the models
const db = require('../../models');

// route to create a new user
router.post('/', (req, res) => {
  db.User.create(req.body)
    .then(resp => res.json(resp))
    .catch(err => console.log(err));
});

module.exports = router;
