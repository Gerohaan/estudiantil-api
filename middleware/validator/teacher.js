const teacherService = require('../../services/teacher')

class teacherValidator {
    existsDocument = documentNumber => {
        return teacherService.getOne({
            documentNumber
            })
            .then(teacher => {
                return teacher === null ? true : Promise.reject('El documento '+documentNumber+' existe en la base de datos')
            })
    }

    exists = id => {
        return teacherService.getOne({
                id
            })
            .then(teacher => {
                return teacher !== null ? true : Promise.reject('El id no corresponde a ningún docente registrado')
            })
    }
}
module.exports = new teacherValidator()