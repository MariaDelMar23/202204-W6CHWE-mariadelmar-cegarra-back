require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const { notFoundError, generalError } = require("./middlewares/errors");
const robotRouter = require("./routers/robotRouters");

const app = express();

const server = () => {
  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());

  app.use("/robots", robotRouter);

  app.use(notFoundError);
  app.use(generalError);
};

module.exports = {
  app,
  server,
};
