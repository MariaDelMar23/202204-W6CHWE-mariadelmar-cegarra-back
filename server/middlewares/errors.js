const chalk = require("chalk");

require("dotenv").config();
const debug = require("debug")("robots:server:errors");

const notFoundError = (req, res) => {
  debug(chalk.red(`${req.method} on ${req.params} not found`));
  res.status(404).json({ msg: "Endpoint not found" });
};

const generalError = (error, req, res) => {
  debug(chalk.red(`${error.message}`));
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.statusCode
    ? error.message
    : { msg: "General error" };
  res.status(statusCode).json({ msg: errorMessage });
};

module.exports = { notFoundError, generalError };
