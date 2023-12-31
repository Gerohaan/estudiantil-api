var express = require('express')
var router = express.Router()
var controller = require('../controllers/grade')
var gradesValidator = require('../middleware/validator/grade')
//var userValidator = require('../middleware/validator/user')
var gradesSchema = require('../middleware/schema/grade')
const { body,checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator') // esta funcion es del paquete express-validator nos devuelve mensae de eroor si lo ay
const auth = require('../middleware/auth')
const { id_teacher } = require('../middleware/schema/grade')

router.get('/list', 
  auth, 
  controller.list
)

router.post(
  '/add',
  auth,
  checkSchema(gradesSchema),
  body('name').custom(name => {
    return gradesValidator.existsName(name)
  }),
  /* param('id_section').custom(id_section => {
    return gradesValidator.existsIdSection(id_section)
  }), */
  body('id_teacher').custom(id_teacher => {
    return gradesValidator.existsIdTeacher(id_teacher)
  }),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  auth,
  param('id').custom(id => {
    return gradesValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.post(
  '/add/studentGrade',
  auth,
  body('id_student').custom(id_student => {
    return gradesValidator.existsIdtudent(id_student)
  }),
  validator.returnErrors,
  controller.createStudentGrade
)
router.post(
  '/add/subjectGrade',
  auth,
  /* body('id_subject').custom(id_subject => {
    return gradesValidator.existsIdSubject(id_subject)
  }), */
  validator.returnErrors,
  controller.createSubjectGrade
)
router.get(
  '/show/student/:id',
  auth,
 /*  param('id').custom(id => {
    return gradesValidator.exists(id)
  }), */
  validator.returnErrors,
  controller.showStudent
)
router.get(
  '/showStudentsGrades',
  auth,
 /*  param('id').custom(id => {
    return gradesValidator.exists(id)
  }), */
  validator.returnErrors,
  controller.showStudentsGrades
)


router.get(
  '/showSubjectGrades',
  auth,
 /*  param('id').custom(id => {
    return gradesValidator.exists(id)
  }), */
  validator.returnErrors,
  controller.showSubjectGrades
)

router.put(
  '/update/:id',
  auth,
  param('id').custom(id => {
    return gradesValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)
router.delete(
  '/delete/:id',
  auth,
  param('id').custom(id => {
    return gradesValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

router.delete(
  '/deleteStudent/:id',
  auth,
  /* param('id').custom(id => {
    return gradesValidator.exists(id)
  }), */
  validator.returnErrors,
  controller.deleteStudent
)

router.delete(
  '/deleteSubject/:id',
  auth,
  /* param('id').custom(id => {
    return gradesValidator.exists(id)
  }), */
  validator.returnErrors,
  controller.deleteSubject
)

module.exports = router