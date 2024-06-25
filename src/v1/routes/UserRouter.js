const { Router } = require('express')
const userController = require('../controllers/UserController.js')
const { validateData } = require('../../schema/ValidationSchema')
const { userSchema } = require('../../schema/User')

const router = Router()

router
  .get('/users', userController.findAll)
  .get('/users/:value', userController.find)
  .post('/users', validateData(userSchema), userController.create)
  .put('/users/:id', validateData(userSchema), userController.update)
  .delete('/users/:id', userController.deleteById)

module.exports = router
