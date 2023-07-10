const { User } = require('../../models/index')

async function store (params) {
  return User
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function getAll (filters) {
    try {
      return await User.findAll()
    } catch (error) {
      throw error
    }
}

async function update (params, filters) {
  try {
    await User.update(params, {
      where: { ...filters }
    })
    return await User
    .findOne({
      where: { ...filters }
    })
  } catch (error) {
      throw error
  }
}

async function getOne (filters) {
  return User
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function destroy (filters) {
  try {
    return User.destroy({
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
