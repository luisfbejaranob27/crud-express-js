import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';
import { validateBody, validatePartialBody } from '../../schema/ValidationSchema.js';
import { userSchema } from '../../schema/User.js';

const router = Router();

router
  .get('/users', UserController.findAll)
  .get('/users/:value', UserController.find)
  .post('/users', validateBody(userSchema), UserController.create)
  .patch('/users/:id', validatePartialBody(userSchema), UserController.update)
  .delete('/users/:id', UserController.deleteById);

export default router;
