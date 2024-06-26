const dbV1 = require('./UsersV1.json').users;

const findAll = () => {
  return dbV1;
};

const findById = (id) => {
  return dbV1.find((user) => user.id === Number(id));
};

const findByEmail = (email) => {
  return dbV1.find((user) => user.email === email);
};

const create = (body) => {
  const newUser = {
    id: id(),
    ...body,
    createdAt: new Date()
  };

  dbV1.push(newUser);
  return newUser;
};

const id = () => {
  const length = dbV1.length;
  return length > 0 ? length + 1 : 1;
};

const update = (body) => {
  const index = dbV1.findIndex((user) => user.id === Number(body.id));

  const newBody = {
    ...body,
    updatedAt: new Date()
  };

  if (index > -1) {
    dbV1[index] = newBody;
    return newBody;
  }
  return null;
};

const deleteById = (id) => {
  const userIndex = dbV1.findIndex((user) => user.id === Number(id));

  if (userIndex > -1) {
    dbV1.splice(userIndex, 1);
  }
};

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
  update,
  deleteById
};
