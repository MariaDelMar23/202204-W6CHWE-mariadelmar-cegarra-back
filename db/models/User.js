const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: [8, "Password must have a minimum of 8 characters"],
    },
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const User = model("User", UserSchema, "users");

module.exports = User;
