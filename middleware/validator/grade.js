const gradeService = require('../../services/grade')

class gradeValidator {
    existsName = name => {
        return gradeService.getOne({
                name
            })
            .then(grade => {
                return grade === null ?
                    true :
                    Promise.reject('El grado '+name+' ya se encuentra registrado')
            })
    }

    existsIdTeacher = id_teacher => {
        return gradeService.getOne({
            id_teacher
            })
            .then(grade => {
                return grade === null ?
                    true :
                    Promise.reject('El docente ya se encuentra registrado en otro grado')
            })
    }

    exists = id => {
        return gradeService.getOne({
            id
            })
            .then(id => {
                return id !== null ?
                    true :
                    Promise.reject('El parametro no existe')
            })
    }
}
module.exports = new gradeValidator()