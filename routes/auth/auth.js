// create an express router instance
const router = require('express').Router();

// Reference user controller
const userController = require('../../controllers/user');

// Reference validation
const validateRegistration = require('../../validation/register');

//Reference helper functions
const helpers = require('../../helpers/helpers');

// route to create a new user
router.post('/register', (req, res) => {
  let errors = validateRegistration.validate(req.body);
  if(helpers.isEmpty(errors)) {
    userController.registerUser(req, res);
  } else {
    res.status(400).json(errors);
  }
  
});

// route to find a user from passed in email
router.post('/login', (req, res) => {
  userController.loginUser(req, res);
});

module.exports = router;

