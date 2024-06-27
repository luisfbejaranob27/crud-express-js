import { Router } from 'express';
import userController from '../../v2/controllers/UserController.js';
import { validateBody, validatePartialBody } from '../../schema/ValidationSchema.js';
import { userSchema } from '../../schema/User.js';

const router = Router();

router
  .get('/users', userController.findAll)
  .get('/users/:value', userController.find)
  .post('/users', validateBody(userSchema), userController.create)
  .patch('/users/:_id', validatePartialBody(userSchema), userController.update)
  .delete('/users/:_id', userController.deleteById);

export default router;
