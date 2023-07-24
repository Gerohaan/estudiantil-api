const personaService = require('../../services/person')

class personaValidator {
    exists = id => {
        return personaService.getOne({
                id
            })
            .then(persona => {
                return persona !== null ?
                    true :
                    Promise.reject('Esta persona no existe')
            })
    }
}
module.exports = new personaValidator()