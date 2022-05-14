const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
  },
  img: {
    type: URL,
  },
  speed: {
    type: Number,
    min: [0, "Please enter a number between 0-10"],
    max: [10, "Please enter a number between 0-10"],
  },
  strength: {
    type: Number,
    min: [0, "Please enter a number between 0-10"],
    max: [10, "Please enter a number between 0-10"],
  },
  dateOfCreation: {
    type: Date,
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
