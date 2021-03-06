const express = require("express");
const loginUser = require("../middlewares/loginUser");

const userRouter = express.Router();

userRouter.post("/login", loginUser);

module.exports = userRouter;
