import dbV1 from './UsersV1.json' assert { type: "json" };

const users = dbV1.users;

const findAll = () => {
  return users;
};

const findById = (id) => {
  return users.find((user) => user.id === Number(id));
};

const findByEmail = (email) => {
  return users.find((user) => user.email === email);
};

const create = (body) => {
  const newUser = {
    id: id(),
    ...body,
    createdAt: new Date()
  };

  users.push(newUser);
  return newUser;
};

const id = () => {
  const length = users.length;
  return length > 0 ? length + 1 : 1;
};

const update = (body) => {
  const index = users.findIndex((user) => user.id === Number(body.id));

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

const deleteById = (id) => {
  const userIndex = users.findIndex((user) => user.id === Number(id));

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
