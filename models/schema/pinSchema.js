const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  label: String,
  description: String,
  type: String, // Add type field
});

const Pin = mongoose.model("Pin", PinSchema);

module.exports = Pin;
