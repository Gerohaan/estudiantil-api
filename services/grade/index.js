const { Grade } = require('../../models/index')
const { GradeStudent } = require('../../models/index')
const { GradeSubject } = require('../../models/index')

async function store (params) {
  return Grade.create({ ...params }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function storeGradeStudent (params) {
  return GradeStudent.create({ ...params }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function storeGradeSubject (params) {
  return GradeSubject.create({ ...params }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function getAllStudentsGrades (filters) {
  return GradeStudent.findAll({
    where: { ...filters },
    include: [
      {
        association: "grade"
      },
      {
        association: "student",
        include: [{
          association: "persona"
        }]
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}


async function getAllSubjectGrades (filters) {
  return GradeSubject.findAll({
    where: { ...filters },
    include: [
      {
        association: "grade"
      },
      {
        association: "subject"
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return Grade.findAll({
    where: { ...filters },
    include: [
      {
        association: "teacher",
        include: [{
          association: "persona"
        }]
      },
      {
        association: "section"
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return Grade.findOne({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOneSubject (filters) {
  return GradeSubject.findOne({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOneStudent (filters) {
  return GradeStudent.findOne({
    where: { ...filters },
    include: [{
      association: "grade",
      include: [{
        association: 'teacher',
        include: [{
          association : 'persona'
        }]
      },
      {
      association : "section"    
      }
    ]
    }]
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return Grade.findOne({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, id) {
  try {
    return await Grade.update(params, { 
      where: {  ...id } 
    })  
  } catch (error) {
    return Promise.reject(error)
  }
}

async function destroyStudent (filters) {
  return GradeStudent.destroy({ where: { ...filters } }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function destroySubject (filters) {
  return GradeSubject.destroy({ where: { ...filters } }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function destroy (filters) {
  return Grade.destroy({ where: { ...filters } }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}
module.exports = {
  store,
  getAll,
  getOne,
  getOneStudent,
  storeGradeStudent,
  storeGradeSubject,
  getAllSubjectGrades,
  getAllStudentsGrades,
  getOneSubject,
  update,
  destroy,
  destroySubject,
  destroyStudent
}
