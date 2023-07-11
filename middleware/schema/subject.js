const { check, body, checkSchema } = require('express-validator')

const checkSubject = {
  name: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  },
  description: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  }

}
module.exports = checkSubject