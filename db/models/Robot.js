require("mongoose-type-url");
const { model, mongoose } = require("mongoose");

const RobotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: mongoose.SchemaTypes.Url,
    },
    features: {
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
    },
  },
  { versionKey: false }
);

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
