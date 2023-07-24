const { Person } = require('../../models/index')

async function store (params) {
  return Person.create({ ...params }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return Person.findAll({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return Person.findOne({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, id) {
  try {
    return Person.update(params, { where: {  id: id } })  
  } catch (error) {
    return Promise.reject(error)
  }
}

async function destroy (filters) {
  return Person.destroy({ where: { ...filters } }).catch(error => {
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
