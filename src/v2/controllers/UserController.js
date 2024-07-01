import { UserService } from '../services/UserService.js';
import statusCodes from 'http-status-codes';

export class UserController {
  static findAll = (req, res) => {
    const users = UserService.findAll();

    if (users.length === 0) return res.status(statusCodes.NOT_FOUND).send({ error: 'Users not found' });

    return res.send(users);
  };

  static find = (req, res) => {
    const {
      params: { value },
      query: { filter }
    } = req;
    if (!filter) {
      const user = UserService.findById(value);

      if (!user) return res.status(statusCodes.NOT_FOUND).send({ error: `User with id: ${value} not found` });

      return res.send(user);
    }
    if (filter === 'email') {
      const user = UserService.findByEmail(value);

      if (!user) return res.status(statusCodes.NOT_FOUND).send({ error: `User with email: ${value} not found` });

      return res.send(user);
    } else {
      return res.status(statusCodes.NOT_FOUND).send({ error: `Filter: ${filter} not found` });
    }
  };

  static create = (req, res) => {
    const { body } = req;

    const created = UserService.create(body);
    return res.status(statusCodes.CREATED).send(created);
  };

  static update = (req, res) => {
    const {
      body,
      params: { _id }
    } = req;

    const updated = UserService.update(_id, body);

    if (!updated) return res.status(statusCodes.NOT_FOUND).send({ error: 'User not found' });

    return res.send(updated);
  };

  static deleteById = (req, res) => {
    const deleted = UserService.deleteById(req.params._id);

    if (!deleted) return res.status(statusCodes.NOT_FOUND).send({ error: 'User not found' });

    return res.status(statusCodes.NO_CONTENT).send();
  };
}
