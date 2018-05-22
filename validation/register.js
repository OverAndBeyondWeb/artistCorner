const validator = require('validator');

module.exports = {
  registerInputValidate: function(data) {
    let errors = {};

    if (!validator.isLength(data.name, {min: 4, max: 24})) {
      errors.name = 'Name must be between 4 and 24 characters';
    }

    return errors;
  }
}