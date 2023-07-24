var express = require('express')
var router = express.Router()
var controller = require('../controllers/lapse')
var lapseValidator = require('../middleware/validator/lapse')
var lapseSchema = require('../middleware/schema/lapse')
const { body,checkSchema, param, validationResult } = require('express-validator')
const validator = require('../middleware/validator') // esta funcion es del paquete express-validator nos devuelve mensae de eroor si lo hay
const auth = require('../middleware/auth')
//const userValidator = require('../middleware/validator/categoria')// aqui es una comprobacion de que n exist otro ID igual

router.get('/list', 
  auth, 
  controller.list
)

router.post(
  '/add',
  checkSchema(lapseSchema),
  /* body('email').custom(email => {
    return lapseValidator.existsEmail(email)
  }), */
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  auth,
  param('id').custom(id => {
    return lapseValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',
  auth,
  param('id').custom(id => {
    return lapseValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

router.delete(
  '/delete/:id',
  auth,
  param('id').custom(id => {
    return lapseValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router