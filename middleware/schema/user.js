const { check, body, checkSchema } = require('express-validator')

const checkuser = {
  name: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  },
  correo: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  },
  password: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  },
  type: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  }

}
module.exports = checkuser