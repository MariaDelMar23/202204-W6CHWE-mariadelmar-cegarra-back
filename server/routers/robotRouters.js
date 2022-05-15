require("dotenv").config();
const express = require("express");
const { getRobots, deleteRobot, createRobot } = require("../controllers");

const robotRouter = express.Router();

robotRouter.get("/", getRobots);
robotRouter.delete("/:idRobot", deleteRobot);
robotRouter.post("/", createRobot);

module.exports = robotRouter;
