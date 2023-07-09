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
  return User
    .findAll()
    .catch(error => {
      return Promise.reject(error)
    })
}

async function update (params, filters) {
  return User
    .update(params, {
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function update2 (params, filters) {
  try {
    await User.update(params, {
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
  return User
    .destroy({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

module.exports = {
  store,
  getAll,
  getOne,
  update,
  update2,
  destroy
}
