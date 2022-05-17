require("dotenv").config();
const bcrypt = require("bcrypt");
const chalk = require("chalk");
const debug = require("debug")("robots:server:middlewares:loginUser");
const jwt = require("jsonwebtoken");
const User = require("../../db/models/User");

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  debug(username, password);
  const user = await User.findOne({ username });
  debug(chalk.blueBright(user));
  if (!user) {
    debug(chalk.red("Incorrect username"));
    const error = new Error("Incorrect username or password");
    error.statusCode = 403;
    next(error);
  } else {
    const correctPassword = await bcrypt.compare(password, user.password);
    const userData = {
      username: user.username,
      id: user._id,
    };
    if (!correctPassword) {
      debug(chalk.red("Incorrect password"));
      const error = new Error("Incorrect username or password");
      error.statusCode = 403;
      next(error);
    } else {
      const token = jwt.sign(userData, process.env.JWT_SECRET);
      res.json({ token });
    }
  }
};

module.exports = loginUser;
