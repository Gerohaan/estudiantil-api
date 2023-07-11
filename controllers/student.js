const studentService = require('../services/student')

class studentController {
  create = (req, res, next) => {
    return studentService
      .store(req.body)
      .then(student => {
        return res.status(200).json(student)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return studentService
      .getAll()
      .then(student => {
        return res.status(200).json(student)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return studentService
      .getOne({
        id: req.params.id
      })
      .then(student => {
        return res.status(200).json(student)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return studentService
      .update(req.body, {
        id: req.params.id
      })
      .then(student => {
        return res.status(200).json(student)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
  
  async update2 (req, res, next) {
    try {
      await studentService.update2(req.body, {
        id: req.params.id
      })
      let data = await studentService.getOne({
        id: req.params.id
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  delete = (req, res, next) => {
    return studentService
      .destroy({
        id: req.params.id
      })
      .then(() => {
        res.status(200).json({ success: 'Estudiante Eliminado' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new studentController()
