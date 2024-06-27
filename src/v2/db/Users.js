import dbV2 from './UsersV2.json' assert { type: "json" };
import crypto from 'node:crypto';

const users = dbV2.users;

const findAll = () => {
  return users;
};

const findById = (id) => {
  return users.find((user) => user._id === id);
};

const findByEmail = (email) => {
  return users.find((user) => user.email === email);
};

const create = (body) => {
  const newUser = {
    id: crypto.randomUUID(),
    ...body,
    createdAt: new Date()
  };

  users.push(newUser);
  return newUser;
};

const update = (body) => {
  const index = users.findIndex((user) => user._id === body._id);

  const newBody = {
    ...body,
    updatedAt: new Date()
  };

  if (index > -1) {
    users[index] = newBody;
    return newBody;
  }
  return null;
};

const deleteById = (_id) => {
  const userIndex = users.findIndex((user) => user._id === _id);

  if (userIndex > -1) {
    users.splice(userIndex, 1);
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
