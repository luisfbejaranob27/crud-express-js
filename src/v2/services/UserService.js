const user = require('../db/Users.js')
const { updateUserValues } = require('../../utils/BodyUtil')

const findAll = () => {
  return user.findAll()
}

const findById = (_id) => {
  return user.findById(_id)
}

const findByEmail = (email) => {
  return user.findByEmail(email)
}

const create = (body) => {
  return user.create(body)
}

const update = (_id, body) => {
  const userDb = findById(_id)

  if (!userDb) {
    return null
  }

  return user.update(updateUserValues(userDb, body))
}

const deleteById = (_id) => {
  const userDb = findById(_id)

  if (!userDb) {
    return false
  }

  user.deleteById(_id)
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
