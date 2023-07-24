const { Lapse } = require('../../models/index')

async function store (params) {
  return Lapse
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function getAll (filters) {
    try {
      return await Lapse.findAll()
    } catch (error) {
      throw error
    }
}

async function update (params, filters) {
  try {
    await Lapse.update(params, {
      where: { ...filters }
    })
    return await Lapse
    .findOne({
      where: { ...filters }
    })
  } catch (error) {
      throw error
  }
}

async function getOne (filters) {
  return Lapse
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function destroy (filters) {
  try {
    return Lapse.destroy({
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
