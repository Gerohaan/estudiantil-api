const { check, body, checkSchema } = require('express-validator')

const checkTeacher = {
  id_person: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  profession: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  status: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  }

}
module.exports = checkTeacher