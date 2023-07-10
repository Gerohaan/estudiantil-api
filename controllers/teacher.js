const teacherService = require('../services/teacher')

class teacherController {
  create = (req, res, next) => {
    return teacherService
      .store(req.body)
      .then(teacher => {
        return res.status(200).json(teacher)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return teacherService
      .getAll()
      .then(teacher => {
        return res.status(200).json(teacher)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return teacherService
      .getOne({
        id: req.params.id
      })
      .then(teacher => {
        return res.status(200).json(teacher)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return teacherService
      .update(req.body, {
        id: req.params.id
      })
      .then(teacher => {
        return res.status(200).json(teacher)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
  
  async update2 (req, res, next) {
    try {
      await teacherService.update2(req.body, {
        id: req.params.id
      })
      let data = await teacherService.getOne({
        id: req.params.id
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  delete = (req, res, next) => {
    return teacherService
      .destroy({
        id: req.params.id
      })
      .then(() => {
        res.status(200).json({ success: 'Docente Eliminado' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new teacherController()
