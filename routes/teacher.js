var express = require('express')
var router = express.Router()
var controller = require('../controllers/teacher')
var teacherValidator = require('../middleware/validator/teacher')
var userValidator = require('../middleware/validator/user')
var teacherSchema = require('../middleware/schema/teacher')
const { body,checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator') // esta funcion es del paquete express-validator nos devuelve mensae de eroor si lo ay
const auth = require('../middleware/auth')

router.get('/list', 
  auth, 
  controller.list
)

router.post(
  '/add',
  auth,
  checkSchema(teacherSchema),
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
    return teacherValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',
  auth,
  param('id').custom(id => {
    return teacherValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

router.delete(
  '/delete/:id',
  auth,
  param('id').custom(id => {
    return teacherValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router