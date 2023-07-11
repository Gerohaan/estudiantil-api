const subjectService = require('../services/subject')

class subjectController {
  create = (req, res, next) => {
    return subjectService
      .store(req.body)
      .then(subject => {
        return res.status(200).json(subject)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return subjectService
      .getAll()
      .then(subject => {
        return res.status(200).json(subject)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return subjectService
      .getOne({
        id: req.params.id
      })
      .then(subject => {
        return res.status(200).json(subject)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return subjectService
      .update(req.body, {
        id: req.params.id
      })
      .then(subject => {
        return res.status(200).json(subject)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
  
  async update2 (req, res, next) {
    try {
      await subjectService.update2(req.body, {
        id: req.params.id
      })
      let data = await subjectService.getOne({
        id: req.params.id
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  delete = (req, res, next) => {
    return subjectService
      .destroy({
        id: req.params.id
      })
      .then(() => {
        res.status(200).json({ success: 'Materia Eliminado' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new subjectController()
