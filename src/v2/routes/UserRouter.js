const { Router } = require('express')
const userController = require('../../v2/controllers/UserController.js')

const router = Router()

router
  .get('/users', userController.findAll)
  .get('/users/:value', userController.find)
  .post('/users', userController.create)
  .put('/users/:_id', userController.update)
  .delete('/users/:_id', userController.deleteById)

module.exports = router
