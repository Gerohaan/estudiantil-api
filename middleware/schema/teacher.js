const { check, body, checkSchema } = require('express-validator')

const checkTeacher = {
  name: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  },
  lastName: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  },
  gender: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  },
  documentNumber: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  }

}
module.exports = checkTeacher