require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("robots:server:initializeServer");
const { app } = require(".");

const initializeServer = async (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.yellow(`Server listening on port ${port}`));
      resolve();
    });

    server.on("error", (error) => {
      debug(chalk.red(error.msg));
      reject();
    });
  });

module.exports = initializeServer;
