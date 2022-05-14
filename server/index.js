const express = require("express");
const morgan = require("morgan");

const app = express();

const server = () => {
  app.use(morgan("dev"));
  app.use(express.json());
};

module.exports = {
  app,
  server,
};
