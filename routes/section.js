var express = require('express')
var router = express.Router()
var controller = require('../controllers/section')
var sectionValidator = require('../middleware/validator/section')
var sectionSchema = require('../middleware/schema/section')
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
  checkSchema(sectionSchema),
  body('name').custom(name => {
    return sectionValidator.existsName(name)
  }),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  auth,
  param('id').custom(id => {
    return sectionValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',
  auth,
  param('id').custom(id => {
    return sectionValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

router.delete(
  '/delete/:id',
  auth,
  param('id').custom(id => {
    return sectionValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router