const sectionService = require('../services/section')

class sectionController {
  create = (req, res, next) => {
    return sectionService
      .store(req.body)
      .then(section => {
        return res.status(200).json(section)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return sectionService
      .getAll()
      .then(section => {
        return res.status(200).json(section)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return sectionService
      .getOne({
        id: req.params.id
      })
      .then(section => {
        return res.status(200).json(section)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return sectionService
      .update(req.body, {
        id: req.params.id
      })
      .then(section => {
        return res.status(200).json(section)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
  
  async update2 (req, res, next) {
    try {
      await sectionService.update2(req.body, {
        id: req.params.id
      })
      let data = await sectionService.getOne({
        id: req.params.id
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  delete = (req, res, next) => {
    return sectionService
      .destroy({
        id: req.params.id
      })
      .then(() => {
        res.status(200).json({ success: 'Sección Eliminada' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new sectionController()
