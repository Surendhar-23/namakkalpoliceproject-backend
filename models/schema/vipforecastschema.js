const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  modeofArrival: {
    type: String,
    required: true,
  },
  entryRoute: {
    type: String,
    required: true,
  },
  exitRoute: {
    type: String,
    required: true,
  },
  PlaceofStay: {
    type: String,
    required: true,
  },
  crowd: {
    type: Boolean,
    required: true,
  },
  officer: {
    type: String,
  },
});
const Vipforecast = mongoose.model("VIPForecast", EventSchema);
module.exports = Vipforecast;
