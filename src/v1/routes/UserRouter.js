const { Router } = require('express')
const userController = require('../controllers/UserController.js')

const router = Router()

router
  .get('/users', userController.findAll)
  .get('/users/:value', userController.find)
  .post('/users', userController.create)
  .put('/users/:id', userController.update)
  .delete('/users/:id', userController.deleteById)

module.exports = router
