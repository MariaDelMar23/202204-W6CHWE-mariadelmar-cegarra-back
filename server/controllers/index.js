require("dotenv").config();
const debug = require("debug")("robots:server:controllers");
const chalk = require("chalk");
const Robot = require("../../db/models/Robot");

const getRobots = async (req, res) => {
  debug(chalk.blue("Request to get robots"));
  const robots = await Robot.find();
  res.status(200).json({ robots });
};

const getRobotById = async (req, res) => {
  const { idRobot } = req.params;
  debug(chalk.blue(`Request to get the robot with id: `));
  const robot = await Robot.findById(idRobot);
  res.status(200).json(robot);
};

const deleteRobot = async (req, res) => {
  debug(chalk.blueBright("Request to delete a robot"));
  const { idRobot } = req.params;
  await Robot.findByIdAndDelete(idRobot);
  res.status(200).json({ msg: `Deleted robot with Id ${idRobot}` });
};

const createRobot = async (req, res) => {
  debug(chalk.blueBright("Request to create a robot"));
  const robot = req.body;
  const newRobot = await Robot.create(robot);
  res.status(201).json(newRobot);
};

module.exports = {
  getRobots,
  deleteRobot,
  createRobot,
  getRobotById,
};
