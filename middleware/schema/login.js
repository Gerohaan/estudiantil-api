const { check, body, checkSchema } = require('express-validator')

const checkLogin = {
  email : {
    notEmpty: true,
    errorMessage: 'El email no puede estar vacío.',
  },
  password: {
    notEmpty: true,
    errorMessage: 'La contraseña no puede estar vacía.'
  }

}
module.exports = checkLogin