const userService = require('../services/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

class userController {


  create = async (req, res, next) => {
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
    req.body.password = password 
    return await userService
      .storePerson(req.body)
      .then(async person => {
        let body = {
          id: person.id,
          body: req.body
        }
        ////////////Crear Usuario /////////////////
         let paramsUser = {
            id_person : body.id,
            type: body.body.type,
            email: body.body.email,
            password: body.body.password,
            status: body.body.status
          }
          await userService.store(paramsUser).then(user => {
            let token = jwt.sign({ user: user }, authConfig.secret, {
                expiresIn: authConfig.expires
            })
            return res.status(200).json({
              user: user,
              token: token
          })
          }).catch(err => {
            return res.status(400).send(err)
          })
        ///////////////////////////////////////////
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return userService
      .getAll()
      .then(user => {
        return res.status(200).json(user)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return userService
      .getOne({
        id: req.params.id
      })
      .then(user => {
        return res.status(200).json(user)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return userService
      .update(req.body, {
        id: req.params.id
      })
      .then(user => {
        return res.status(200).json(user)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
  
  async update2 (req, res, next) {
    try {
      await userService.update2(req.body, {
        id: req.params.id
      })
      let data = await userService.getOne({
        id: req.params.id
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  delete = (req, res, next) => {
    return userService
      .destroy({
        id: req.params.id
      })
      .then(() => {
        res.status(200).json({ success: 'Usuario Eliminado' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new userController()
