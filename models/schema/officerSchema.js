const mongoose = require("mongoose");

const officerSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  duties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Duty", // This references the Duty model
    },
  ],
});

module.exports = mongoose.model("Officer", officerSchema);
