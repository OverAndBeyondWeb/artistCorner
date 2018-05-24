const validator = require('validator');
const helpers = require('../helpers/helpers');


// TODO: Set more validation cases
module.exports.validate = (registrationData) => {
  let errors = {};

  if (!validator.isLength(registrationData.username, {min: 4, max: 24})) {
    errors.name = 'Name must be between 4 and 24 characters';
  }

  // Validate that all fields are filled out
  if(helpers.isEmpty(registrationData.username)) {
    errors.name = 'Please enter your name';
  }

  if(helpers.isEmpty(registrationData.email)) {
    errors.email = 'Please enter your email';
  }

  if(helpers.isEmpty(registrationData.password)) {
    errors.password = 'Please enter a password';
  }

  if(helpers.isEmpty(registrationData.password2)) {
    errors.password2 = 'Please re-enter your password';
  }

  return errors;
}
