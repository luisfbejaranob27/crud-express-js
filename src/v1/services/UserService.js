const user = require('../db/Users.js')
const { updateUserValues } = require('../../utils/BodyUtil')

const findAll = () => {
  return user.findAll()
}

const findById = (id) => {
  return user.findById(id)
}

const findByEmail = (email) => {
  return user.findByEmail(email)
}

const create = (body) => {
  return user.create(body)
}

const update = (id, body) => {
  const userDb = findById(id)

  if (!userDb) {
    return null
  }

  return user.update(updateUserValues(userDb, body))
}

const deleteById = (id) => {
  const userDb = findById(id)

  if (!userDb) {
    return false
  }

  user.deleteById(id)
  return true
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
  update,
  deleteById
}
