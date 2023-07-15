const mongoose = require("mongoose");
const { Schema } = mongoose;

const Taskschema = new Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", Taskschema);
