const userService = require('../services/UserService');
const { StatusCodes } = require('http-status-codes');

const findAll = (req, res) => {
  const users = userService.findAll();

  if (users.length === 0) return res.status(StatusCodes.NOT_FOUND).send({ error: 'Users not found' });

  return res.send(users);
};

const find = (req, res) => {
  const {
    params: { value },
    query: { filter }
  } = req;
  if (!filter) {
    const user = userService.findById(value);

    if (!user) return res.status(StatusCodes.NOT_FOUND).send({ error: `User with id: ${value} not found` });

    return res.send(user);
  }
  if (filter === 'email') {
    const user = userService.findByEmail(value);

    if (!user) return res.status(StatusCodes.NOT_FOUND).send({ error: `User with email: ${value} not found` });

    return res.send(user);
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({ error: `Filter: ${filter} not found` });
  }
};

const create = (req, res) => {
  const { body } = req;

  const created = userService.create(body);
  return res.status(StatusCodes.CREATED).send(created);
};

const update = (req, res) => {
  const {
    body,
    params: { _id }
  } = req;

  const updated = userService.update(_id, body);

  if (!updated) return res.status(StatusCodes.NOT_FOUND).send({ error: 'User not found' });

  return res.send(updated);
};

const deleteById = (req, res) => {
  const deleted = userService.deleteById(req.params._id);

  if (!deleted) return res.status(StatusCodes.NOT_FOUND).send({ error: 'User not found' });

  return res.status(StatusCodes.NO_CONTENT).send();
};

module.exports = {
  findAll,
  find,
  create,
  update,
  deleteById
};
