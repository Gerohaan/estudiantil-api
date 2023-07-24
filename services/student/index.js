const { Student } = require('../../models/index')

async function store (params) {
  return Student
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function getAll (filters) {
    try {
      return await Student.findAll({
        include: [{
          association: "persona"
        }]
      })
    } catch (error) {
      throw error
    }
}

async function update (params, filters) {
  try {
    await Student.update(params, {
      where: { ...filters }
    })
    return await Student
    .findOne({
      where: { ...filters }
    })
  } catch (error) {
      throw error
  }
}

async function getOne (filters) {
  return Student
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function destroy (filters) {
  try {
    return Student.destroy({
      where: { ...filters }
    })
  } catch (error) {
      throw error
  }
}

module.exports = {
  store,
  getAll,
  getOne,
  update,
  destroy
}
