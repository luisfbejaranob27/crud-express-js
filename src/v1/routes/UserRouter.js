const { Router } = require('express');
const userController = require('../controllers/UserController.js');
const { validateBody, validatePartialBody } = require('../../schema/ValidationSchema');
const { userSchema } = require('../../schema/User');

const router = Router();

router
  .get('/users', userController.findAll)
  .get('/users/:value', userController.find)
  .post('/users', validateBody(userSchema), userController.create)
  .patch('/users/:id', validatePartialBody(userSchema), userController.update)
  .delete('/users/:id', userController.deleteById);

module.exports = router;
