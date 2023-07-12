const sectionService = require('../../services/section')

class sectionValidator {
    existsName = name => {
        return sectionService.getOne({
            name
            })
            .then(section => {
                return section === null ? true : Promise.reject('La sección '+name+' existe en la base de datos')
            })
    }

    exists = id => {
        return sectionService.getOne({
                id
            })
            .then(section => {
                return section !== null ? true : Promise.reject('El id no corresponde a ningúna sección registrada')
            })
    }
}
module.exports = new sectionValidator()