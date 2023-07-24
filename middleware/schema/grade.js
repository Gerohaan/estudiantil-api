const { check, body, checkSchema } = require('express-validator')

const checkStudent = {
  name: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  id_teacher: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  id_section : {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  turn: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  amount_in_tuition: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  limit: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  status: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },

}
module.exports = checkStudent