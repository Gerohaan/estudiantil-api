const userService = require('../services/user')
const personService = require('../services/person')
const studentService = require('../services/student')
const teacherService = require('../services/teacher')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

class userController {

  // Login
   signIn(req, res) {

    let { email, password } = req.body;

    // Buscar usuario
    userService.getOneSignIn(email).then(user => {
        if (!user) {
            res.status(404).json({ msg: "Correo no corresponde a ningun usuario registrado" })
          } else {
              if (bcrypt.compareSync(password, user.password)) {

                  // Creamos el token
                  let token = jwt.sign({ user: user }, authConfig.secret, {
                      expiresIn: authConfig.expires
                  });

                  res.json({
                      user: user,
                      token: token
                  })

              } else {

                  // Unauthorized Access
                  res.status(401).json({ msg: "Contraseña incorrecta" })

              }

          }

      }).catch(err => {
          res.status(500).json(err);
      })

  }

  // Logout
  signOut(req, res) {

    // Buscar usuario
    try { 
      let tokenNew = jwt.sign({ user: 'out' }, authConfig.secret, {
          expiresIn: '1s'
      });
      return res.status(200).json({
        tokenNew: tokenNew,
        message: 'Sesión eliminada'
      })
    } catch (error) {
      throw error
    }

  }

  create = async (req, res, next) => {
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
    req.body.password = password 
    return await userService
      .storePerson(req.body)
      .then(async person => {
        /////////////Crear teacher o students//////
        if(req.body.type === 'Teacher'){
          let bodyTeacher = {
            id_person : person.id,
            profession: req.body.profession,
            status: req.body.status
          }
          try {
            await teacherService.store(bodyTeacher)
          } catch (error) {
            throw error            
          }
        }
        if(req.body.type === 'Student'){
          let bodyStudent = {
            id_person : person.id,
            representative: req.body.representative,
            status: req.body.status
          }
          try {
            await studentService.store(bodyStudent)
          } catch (error) {
            throw error
          }
        }
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
    return personService
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
