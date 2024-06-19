const express = require("express");
const userController = require("../controllers/UserController.js");

const router = express.Router();

router
    .get("/users", userController.findAll)
    .get("/users/:id", userController.findById)
    .post("/users", userController.create)
    .put("/users", userController.update)
    .delete("/users/:id", userController.deleteById)

module.exports = router;