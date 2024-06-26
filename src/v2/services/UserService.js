const user = require('../db/Users.js');

const findAll = () => {
  return user.findAll();
};

const findById = (_id) => {
  return user.findById(_id);
};

const findByEmail = (email) => {
  return user.findByEmail(email);
};

const create = (body) => {
  return user.create(body);
};

const update = (_id, body) => {
  const userDb = findById(_id);

  if (!userDb) return null;

  const newBody = {
    ...userDb,
    ...body
  };

  return user.update(newBody);
};

const deleteById = (_id) => {
  const userDb = findById(_id);

  if (!userDb) {
    return false;
  }

  user.deleteById(_id);
  return true;
};

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
  update,
  deleteById
};
