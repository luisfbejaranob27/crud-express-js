import user from '../db/Users.js';

export class UserService {
  static findAll = async() => {
    return user.findAll();
  };

  static findById = async(id) => {
    return user.findById(id);
  };

  static findByEmail = async(email) => {
    return user.findByEmail(email);
  };

  static create = async(body) => {
    return user.create(body);
  };

  static update = async(id, body) => {
    const userDb = await UserService.findById(id);

    if (!userDb) return null;

    const newBody = {
      ...userDb,
      ...body
    };

    return user.update(newBody);
  };

  static deleteById = async(id) => {
    const userDb = await UserService.findById(id);

    if (!userDb) {
      return false;
    }

    user.deleteById(id);
    return true;
  };
}
