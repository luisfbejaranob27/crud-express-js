const { Router } = require('express');
const userController = require('../../v2/controllers/UserController.js');
const { validateBody, validatePartialBody } = require('../../schema/ValidationSchema');
const { userSchema } = require('../../schema/User');

const router = Router();

router
  .get('/users', userController.findAll)
  .get('/users/:value', userController.find)
  .post('/users', validateBody(userSchema), userController.create)
  .patch('/users/:_id', validatePartialBody(userSchema), userController.update)
  .delete('/users/:_id', userController.deleteById);

module.exports = router;
