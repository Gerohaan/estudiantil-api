const userService = require('../../services/user')
const { correo } = require('../schema/user')

class userValidator {
    existsEmail = email => {
        return userService.getOne({
                email
            })
            .then(user => {
                return user === null ? true : Promise.reject('El correo '+email+' existe en la base de datos')
            })
    }

    exists = id => {
        return userService.getOne({
                id
            })
            .then(user => {
                return user !== null ? true : Promise.reject('El id no corresponde a ningún usuario registrado')
            })
    }
}
module.exports = new userValidator()