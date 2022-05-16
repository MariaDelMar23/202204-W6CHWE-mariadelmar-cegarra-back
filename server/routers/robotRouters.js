require("dotenv").config();
const express = require("express");
const {
  getRobots,
  deleteRobot,
  createRobot,
  getRobotById,
} = require("../controllers");
const auth = require("../middlewares/auth");

const robotRouter = express.Router();

robotRouter.get("/", getRobots);
robotRouter.get("/:idRobot", getRobotById);
robotRouter.delete("/delete/:idRobot", auth, deleteRobot);
robotRouter.post("/create", auth, createRobot);

module.exports = robotRouter;
