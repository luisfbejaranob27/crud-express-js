import { Router } from 'express';
import userController from '../controllers/UserController.js';
import { validateBody, validatePartialBody } from '../../schema/ValidationSchema.js';
import { userSchema } from '../../schema/User.js';

const router = Router();

router
  .get('/users', userController.findAll)
  .get('/users/:value', userController.find)
  .post('/users', validateBody(userSchema), userController.create)
  .patch('/users/:id', validatePartialBody(userSchema), userController.update)
  .delete('/users/:id', userController.deleteById);

export default router;
