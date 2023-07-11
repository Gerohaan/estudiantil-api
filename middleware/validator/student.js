const studentService = require('../../services/student')

class studentValidator {
    existsDocument = documentNumber => {
        return studentService.getOne({
            documentNumber
            })
            .then(student => {
                return student === null ? true : Promise.reject('El documento '+documentNumber+' existe en la base de datos')
            })
    }

    exists = id => {
        return studentService.getOne({
                id
            })
            .then(student => {
                return student !== null ? true : Promise.reject('El id no corresponde a ningún estudiante registrado')
            })
    }
}
module.exports = new studentValidator()