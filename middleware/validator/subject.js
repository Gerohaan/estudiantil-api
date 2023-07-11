const subjectService = require('../../services/subject')

class subjectValidator {
    existsName = name => {
        return subjectService.getOne({
            name
            })
            .then(subject => {
                return subject === null ? true : Promise.reject('La materia '+name+' existe en la base de datos')
            })
    }

    exists = id => {
        return subjectService.getOne({
                id
            })
            .then(subject => {
                return subject !== null ? true : Promise.reject('El id no corresponde a ningúna materia registrada')
            })
    }
}
module.exports = new subjectValidator()