var express = require('express')
var router = express.Router()
var controller = require('../controllers/subject')
var subjectValidator = require('../middleware/validator/subject')
var subjectSchema = require('../middleware/schema/subject')
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
  checkSchema(subjectSchema),
  body('name').custom(name => {
    return subjectValidator.existsName(name)
  }),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  auth,
  param('id').custom(id => {
    return subjectValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',
  auth,
  param('id').custom(id => {
    return subjectValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

router.delete(
  '/delete/:id',
  auth,
  param('id').custom(id => {
    return subjectValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router