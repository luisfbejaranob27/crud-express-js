import dbV2 from './Users.json' with { type: "json" };
import crypto from 'node:crypto';

const findAll = () => {
  return dbV2;
};

const findById = (id) => {
  return dbV2.find((user) => user._id === id);
};

const findByEmail = (email) => {
  return dbV2.find((user) => user.email === email);
};

const create = (body) => {
  const newUser = {
    id: crypto.randomUUID(),
    ...body,
    createdAt: new Date()
  };

  dbV2.push(newUser);
  return newUser;
};

const update = (body) => {
  const index = dbV2.findIndex((user) => user._id === body._id);

  const newBody = {
    ...body,
    updatedAt: new Date()
  };

  if (index > -1) {
    dbV2[index] = newBody;
    return newBody;
  }
  return null;
};

const deleteById = (_id) => {
  const userIndex = dbV2.findIndex((user) => user._id === _id);

  if (userIndex > -1) {
    dbV2.splice(userIndex, 1);
  }
};

export default {
  findAll,
  findById,
  findByEmail,
  create,
  update,
  deleteById
};
