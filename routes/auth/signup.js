const router = require('express').Router();
const db = require('../../models');

router.post('/', (req, res) => {
  db.User.create(req.body)
    .then(resp => res.json(resp))
    .catch(err => console.log(err));
});

module.exports = router;
