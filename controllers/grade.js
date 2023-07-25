const gradeService = require('../services/grade/index')

class gradeController {
  create = (req, res, next) => {
    return gradeService
      .store(req.body)
      .then(newgrade => {
        return res.status(200).json(newgrade)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return gradeService
      .getAll()
      .then(grade => {
        res.status(200).json(grade)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return gradeService
      .getOne({
        id: req.params.id
      })
      .then(grade => {
        res.status(200).json(grade)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  update = async (req, res, next) => {
      await gradeService.getOne({ id: req.params.id }).then(async respGrade => {
        if(respGrade.id_teacher !== req.body.id_teacher){
         await gradeService.getOne({ ...req.body.id_teacher }).then(respFindT => {
            if(respFindT !== null){
              res.status(400).send({ errors: [ { msg : 'El docente ya se encuentra registrado en otro grado' }] })
            }else{
              gradeService.update(req.body, {
                id: req.params.id
              }).then(() => {
                res.status(200).json({ success: 'Grado actualizado' })
              }).catch(error => {
                res.status(400).send(error)
              })
            }
          })
        }else{
          await gradeService.update(req.body, {
            id: req.params.id
          }).then(() => {
            res.status(200).json({ success: 'Grado actualizado' })
          }).catch(error => {
            res.status(400).send(error)
          })
        }
      }).catch(error => {
        res.status(400).send(error)
      })
  }

  delete = (req, res, next) => {
    return gradeService
      .destroy({ id: req.params.id })
      .then(() => {
        res.status(200).json({ success: 'Grado eliminado' })
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }
}
module.exports = new gradeController()
