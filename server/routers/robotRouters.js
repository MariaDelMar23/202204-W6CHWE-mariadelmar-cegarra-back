require("dotenv").config();
const express = require("express");
const { getRobots, deleteRobot } = require("../controllers");

const robotRouter = express.Router();

robotRouter.get("/", getRobots);
robotRouter.delete("/:idRobot", deleteRobot);
module.exports = robotRouter;
