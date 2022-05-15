require("dotenv").config();
const debug = require("debug")("robots:server:controllers");
const chalk = require("chalk");
const Robot = require("../../db/models/Robot");

const getRobots = async (req, res) => {
  debug(chalk.blueBright("Request to get robots"));
  const robots = await Robot.find();
  res.status(200).json({ robots });
};

const deleteRobot = async (req, res) => {
  debug(chalk.blueBright("Request to delete a robot"));
  const { idRobot } = req.params;
  await Robot.findByIdAndDelete(idRobot);
  res.status(200).json({ msg: `Deleted robot with Id ${idRobot}` });
};

module.exports = {
  getRobots,
  deleteRobot,
};
