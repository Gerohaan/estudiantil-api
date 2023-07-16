const { check, body, checkSchema } = require('express-validator')

const checkTeacher = {
  profession: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  type: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  status: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  }

}
module.exports = checkTeacher