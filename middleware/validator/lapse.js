const lapseService = require('../../services/lapse')

class sectionValidator {
    existsName = name => {
        return lapseService.getOne({
            name
            })
            .then(section => {
                return section === null ? true : Promise.reject('El lapso '+name+' existe en la base de datos')
            })
    }

    exists = id => {
        return lapseService.getOne({
                id
            })
            .then(section => {
                return section !== null ? true : Promise.reject('El id no corresponde a ningúna sección registrada')
            })
    }
}
module.exports = new sectionValidator()