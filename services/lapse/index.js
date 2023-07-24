const { Lapse } = require('../../models/index')

async function store (params) {
  return Lapse.create({ ...params }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return Lapse.findAll({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return Lapse.findOne({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, id) {
  try {
    return Lapse.update(params, { where: { ...id } })  
  } catch (error) {
    return Promise.reject(error)
  }
}

async function destroy (filters) {
  return Lapse.destroy({ where: { ...filters } }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}
module.exports = {
  store,
  getAll,
  getOne,
  update,
  destroy
}
