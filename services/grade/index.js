const { Grade } = require('../../models/index')

async function store (params) {
  return Grade.create({ ...params }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return Grade.findAll({
    where: { ...filters }
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
    return Grade.update(params, { where: {  id: id } })  
  } catch (error) {
    return Promise.reject(error)
  }
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
  update,
  destroy
}
