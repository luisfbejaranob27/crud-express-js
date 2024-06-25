const { Router } = require('express')
const userController = require('../../v2/controllers/UserController.js')
const { validateData } = require('../../schema/ValidationSchema')
const { userSchema } = require('../../schema/User')

const router = Router()

router
  .get('/users', userController.findAll)
  .get('/users/:value', userController.find)
  .post('/users', validateData(userSchema), userController.create)
  .put('/users/:_id', validateData(userSchema), userController.update)
  .delete('/users/:_id', userController.deleteById)

module.exports = router
