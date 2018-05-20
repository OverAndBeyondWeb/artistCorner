const router = require('express').Router();

router.get('/', (req, res) => res.json({ message: 'post' }));

module.exports = router;
