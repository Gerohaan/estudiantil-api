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

  update = (req, res, next) => {
    return gradeService
      .update(req.body, {
        id: req.params.id
      })
      .then(() => {
        return gradeService.getOne({
          id: req.params.id
        })
      })
      .then(grade => {
      return  res.status(200).json(grade)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  delete = (req, res, next) => {
    return gradeService
      .destroy({ id: req.params.id })
      .then(() => {
        res.status(200).json({ success: 'grade Eliminada' })
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }
}
module.exports = new gradeController()
