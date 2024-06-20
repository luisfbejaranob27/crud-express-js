const express = require("express");
const userController = require("../../v2/controllers/UserController.js");

const router = express.Router();

router
    .get("/users", userController.findAll)
    .get("/users/:_id", userController.findById)
    .post("/users", userController.create)
    .put("/users", userController.update)
    .delete("/users/:_id", userController.deleteById)

module.exports = router;