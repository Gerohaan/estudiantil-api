var express = require('express')
var router = express.Router()
var controller = require('../controllers/user')
var userValidator = require('../middleware/validator/user')
var userSchema = require('../middleware/schema/user')
const { body,checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator') // esta funcion es del paquete express-validator nos devuelve mensae de eroor si lo ay
const { correo } = require('../middleware/schema/user')
const auth = require('../middleware/auth')
//const userValidator = require('../middleware/validator/categoria')// aqui es una comprobacion de que n exist otro ID igual

router.get('/list', 
  auth, 
  controller.list
)

router.post(
  '/add',
  checkSchema(userSchema),
  body('correo').custom(correo => {
    return userValidator.existsEmail(correo)
  }),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  param('id').custom(id => {
    return userValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',
  param('id').custom(id => {
    return userValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

router.delete(
  '/delete/:id',
  param('id').custom(id => {
    return userValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router