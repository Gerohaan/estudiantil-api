const gradeService = require('../../services/grade')

class gradeValidator {
    exists = id => {
        return gradeService.getOne({
                id
            })
            .then(grade => {
                return grade !== null ?
                    true :
                    Promise.reject('Este grado no existe')
            })
    }
}
module.exports = new gradeValidator()