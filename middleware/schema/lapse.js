const { check, body, checkSchema } = require('express-validator')

const checkSection = {
  name: {
    notEmpty: true,
    errorMessage: 'Nombre no puede estar vacío'
  },
  start_date: {
    notEmpty: true,
    errorMessage: 'Fecha de inicio no puede estar vacía'
  },
  end_date: {
    notEmpty: true,
    errorMessage: 'Fecha de fin no puede estar vacía'
  }

}
module.exports = checkSection