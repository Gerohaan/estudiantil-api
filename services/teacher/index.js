const { Teacher } = require('../../models/index')

async function store (params) {
  return Teacher
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function getAll (filters) {
    try {
      return await Teacher.findAll()
    } catch (error) {
      throw error
    }
}

async function update (params, filters) {
  try {
    await Teacher.update(params, {
      where: { ...filters }
    })
    return await Teacher
    .findOne({
      where: { ...filters }
    })
  } catch (error) {
      throw error
  }
}

async function getOne (filters) {
  return Teacher
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function destroy (filters) {
  try {
    return Teacher.destroy({
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
