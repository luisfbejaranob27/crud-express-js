const userService = require('../services/UserService')
const { checkParameters, printParameters } = require('../../utils/BodyUtil')

const findAll = (req, res) => {
  const users = userService.findAll()

  if (users.length === 0) res.status(404).send({ error: 'Users not found' })

  return res.send(users)
}

const find = (req, res) => {
  const {
    params: { value },
    query: { filter }
  } = req
  if (!filter) {
    const user = userService.findById(value)

    if (!user) res.status(404).send({ error: `User with id: ${value} not found` })

    return res.send(user)
  }
  if (filter === 'email') {
    const user = userService.findByEmail(value)

    if (!user) res.status(404).send({ error: `User with email: ${value} not found` })

    return res.send(user)
  } else {
    res.status(404).send({ error: `Filter: ${filter} not found` })
  }
}

const create = (req, res) => {
  const { body } = req

  const bodyParameters = process.env.USER_BODY_PARAMETERS.split(',')
  const parametersNotFound = checkParameters(bodyParameters, body)

  if (parametersNotFound.length === 1) res.status(400).send({ error: `The ${printParameters(parametersNotFound)} parameter are mandatory.` })
  if (parametersNotFound.length > 1) res.status(400).send({ error: `The ${printParameters(parametersNotFound)} parameters are mandatory.` })

  const created = userService.create(body)
  return res.status(201).send(created)
}

const update = (req, res) => {
  const {
    body,
    params: { id }
  } = req

  const updated = userService.update(id, body)

  if (!updated) res.status(404).send({ error: 'User not found' })

  return res.send(updated)
}

const deleteById = (req, res) => {
  const deleted = userService.deleteById(req.params.id)

  if (!deleted) res.status(404).send({ error: 'User not found' })

  res.status(204).send()
}

module.exports = {
  findAll,
  find,
  create,
  update,
  deleteById
}
