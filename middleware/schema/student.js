const { check, body, checkSchema } = require('express-validator')

const checkStudent = {
  representative: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  status: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  }

}
module.exports = checkStudent