const router = require('express').Router();

router.get('/', (req, res) => res.json({ message: 'login' }));

module.exports = router;
