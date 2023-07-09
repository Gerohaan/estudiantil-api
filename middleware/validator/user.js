const userService = require('../../services/user')

class userValidator {
    exists = id => {
        return userService.getOne({
                id
            })
            .then(user => {
                return user !== null ?
                    true :
                    Promise.reject('bat request')
            })
    }
}
module.exports = new userValidator()