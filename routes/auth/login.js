const router = require('express').Router();

router.post('/', (req, res) => res.json({ message: 'login' }));

module.exports = router;
