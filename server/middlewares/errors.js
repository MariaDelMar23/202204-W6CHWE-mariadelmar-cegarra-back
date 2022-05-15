const chalk = require("chalk");

require("dotenv").config();
const debug = require("debug")("robots:server:errors");

const notFoundError = (req, res) => {
  debug(chalk.red(`${req.method} on ${req.params} not found`));
  res.status(404).json({ msg: "Endpoint not found" });
};

const generalError = (error, req, res) => {
  debug(chalk.red(`${error.message}`));
  res.status(500).json({ msg: "General error" });
};

module.exports = { notFoundError, generalError };
