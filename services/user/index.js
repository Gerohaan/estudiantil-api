const { User } = require('../../models/index')
const { Person } = require('../../models/index')

async function store (params) {
  return await User
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function storePerson (params) {
  let paramsPerson = {
    name : params.name,
    surname: params.surname,
    gender: params.gender,
    document: params.document,
    phone: params.phone,
    email: params.email,
    birthDate: params.birthDate,
  }
  try {
    return await Person.create({
      ...paramsPerson
    })
  } catch (error) {
    throw error
  }
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

async function getOnePerson (filters) {
  return Person
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
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

async function getOneSignIn (email) {
  return User
    .findOne({
      where: { email }
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
  storePerson,
  getAll,
  getOne,
  getOnePerson,
  getOneSignIn,
  update,
  destroy
}
