import { UserService } from '../services/UserService.js';
import statusCode from 'http-status-codes';

export class UserController {
  static findAll = async(req, res) => {
    const users = await UserService.findAll();

    if (users.length === 0) return res.status(statusCode.NOT_FOUND).send({ error: 'Users not found' });

    return res.send(users);
  };

  static find = async(req, res) => {
    const {
      params: { value },
      query: { filter }
    } = req;
    if (!filter) {
      const user = await UserService.findById(value);

      if (!user) return res.status(statusCode.NOT_FOUND).send({ error: `User with id: ${value} not found` });

      return res.send(user);
    }
    if (filter === 'email') {
      const user = await UserService.findByEmail(value);

      if (!user) return res.status(statusCode.NOT_FOUND).send({ error: `User with email: ${value} not found` });

      return res.send(user);
    } else {
      return res.status(statusCode.NOT_FOUND).send({ error: `Filter: ${filter} not found` });
    }
  };

  static create = async(req, res) => {
    const { body } = req;

    const created = await UserService.create(body);
    return res.status(statusCode.CREATED).send(created);
  };

  static update = async(req, res) => {
    const {
      body,
      params: { id }
    } = req;

    const updated = await UserService.update(id, body);

    if (!updated) return res.status(statusCode.NOT_FOUND).send({ error: 'User not found' });

    return res.send(updated);
  };

  static deleteById = async(req, res) => {
    const deleted = await UserService.deleteById(req.params.id);

    if (!deleted) return res.status(statusCode.NOT_FOUND).send({ error: 'User not found' });

    return res.status(statusCode.NO_CONTENT).send();
  };
}
