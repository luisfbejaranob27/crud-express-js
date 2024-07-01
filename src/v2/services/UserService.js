import user from '../db/Users.js';

export class UserService {
  static findAll = () => {
    return user.findAll();
  };

  static findById = (_id) => {
    return user.findById(_id);
  };

  static findByEmail = (email) => {
    return user.findByEmail(email);
  };

  static create = (body) => {
    return user.create(body);
  };

  static update = (_id, body) => {
    const userDb = UserService.findById(_id);

    if (!userDb) return null;

    const newBody = {
      ...userDb,
      ...body
    };

    return user.update(newBody);
  };

  static deleteById = (_id) => {
    const userDb = UserService.findById(_id);

    if (!userDb) {
      return false;
    }

    user.deleteById(_id);
    return true;
  };
}
