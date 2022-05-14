require("dotenv").config();
const express = require("express");
const { getRobots } = require("../controllers");

const robotRouter = express.Router();

robotRouter.get("/", getRobots);

module.exports = robotRouter;
