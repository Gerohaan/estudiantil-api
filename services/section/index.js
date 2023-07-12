const { Section } = require('../../models/index')

async function store (params) {
  return Section
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function getAll (filters) {
    try {
      return await Section.findAll()
    } catch (error) {
      throw error
    }
}

async function update (params, filters) {
  try {
    await Section.update(params, {
      where: { ...filters }
    })
    return await Section
    .findOne({
      where: { ...filters }
    })
  } catch (error) {
      throw error
  }
}

async function getOne (filters) {
  return Section
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function destroy (filters) {
  try {
    return Section.destroy({
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
