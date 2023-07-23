const { check, body, checkSchema } = require('express-validator')

const checkuser = {
  /* id_person: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  }, */
  type: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  email : {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  password: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  status: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  }

}
module.exports = checkuser