var express = require('express')
var router = express.Router()
var controller = require('../controllers/user')
var userValidator = require('../middleware/validator/user')
var personValidator = require('../middleware/validator/persona')
var userSchema = require('../middleware/schema/user')
var loginSchema = require('../middleware/schema/login')
const { body,checkSchema, param, validationResult } = require('express-validator')
const validator = require('../middleware/validator') // esta funcion es del paquete express-validator nos devuelve mensae de eroor si lo ay
const { correo } = require('../middleware/schema/user')
const auth = require('../middleware/auth')
//const userValidator = require('../middleware/validator/categoria')// aqui es una comprobacion de que n exist otro ID igual


router.post('/login',
  checkSchema(loginSchema),  
  body('email').custom(email => {
    return userValidator.existsEmailLogin(email)
  }),
  validator.returnErrors,
  controller.signIn
)

router.post('/logout',
auth,  
controller.signOut
)

router.get('/list', 
  auth, 
  controller.list
)

router.post(
  '/add',
  checkSchema(userSchema),
  body('email').custom(email => {
    return userValidator.existsEmail(email)
  }),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  auth,
  param('id').custom(id => {
    return userValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',
  auth,
  param('id').custom(id => {
    return userValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

router.delete(
  '/delete/:id',
  auth,
  param('id').custom(id => {
    return personValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router