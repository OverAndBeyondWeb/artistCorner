// create an express router instance
const router = require('express').Router();

// Reference user controller
const userController = require('../../controllers/user');

// Reference validation
const registerValidation = require('../../validation/register');

// route to create a new user
router.post('/register', (req, res) => {
  let regErrors = {};
  userController.registerUser(req, res);
});

// route to find a user from passed in email
router.post('/login', (req, res) => {
  userController.loginUser(req, res);
});

module.exports = router;

