const mongoose = require("mongoose");

const officerSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Officer", officerSchema);
