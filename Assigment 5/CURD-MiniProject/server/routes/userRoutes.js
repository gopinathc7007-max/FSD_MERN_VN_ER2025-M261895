const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controller/userController");

userRouter.get("/get-users", getUsers);
userRouter.post("/create-user", createUser);
userRouter.put("/update-user/:id", updateUser);
userRouter.delete("/delete-user/:id", deleteUser);

module.exports = userRouter;
