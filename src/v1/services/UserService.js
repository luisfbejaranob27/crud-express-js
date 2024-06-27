import user from '../db/Users.js';

const findAll = () => {
  return user.findAll();
};

const findById = (id) => {
  return user.findById(id);
};

const findByEmail = (email) => {
  return user.findByEmail(email);
};

const create = (body) => {
  return user.create(body);
};

const update = (id, body) => {
  const userDb = findById(id);

  if (!userDb) return null;

  const newBody = {
    ...userDb,
    ...body
  };

  return user.update(newBody);
};

const deleteById = (id) => {
  const userDb = findById(id);

  if (!userDb) {
    return false;
  }

  user.deleteById(id);
  return true;
};

export default {
  findAll,
  findById,
  findByEmail,
  create,
  update,
  deleteById
};
