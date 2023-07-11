const { Subject } = require('../../models/index')

async function store (params) {
  return Subject
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function getAll (filters) {
    try {
      return await Subject.findAll()
    } catch (error) {
      throw error
    }
}

async function update (params, filters) {
  try {
    await Subject.update(params, {
      where: { ...filters }
    })
    return await Subject
    .findOne({
      where: { ...filters }
    })
  } catch (error) {
      throw error
  }
}

async function getOne (filters) {
  return Subject
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function destroy (filters) {
  try {
    return Subject.destroy({
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
