const debug = require("debug")("robots:db");
const chalk = require("chalk");
const { mongoose } = require("mongoose");

const connectDB = async (urlDB) =>
  new Promise((resolve, reject) => {
    mongoose.connect(urlDB, (error) => {
      if (error) {
        debug(chalk.red(`An error has occured: ${error.msg}`));
        reject();
        return;
      }
      debug(chalk.green("Connected to database"));
      resolve();
    });
  });

module.exports = connectDB;
