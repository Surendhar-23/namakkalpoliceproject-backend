const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  forecastType: {
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
  duration: {
    type: Number,
    required: true,
  },
  attender: {
    type: String,
    required: true,
  },
  permission: {
    type: String,
    required: true,
  },
  crowd: {
    type: Boolean,
    required: true,
  },
  caseHistory: {
    type: String,
  },
});
const Normalforecast = mongoose.model("NormalForecast", EventSchema);
module.exports = Normalforecast;

// {
//   "forecastType":"sdfsdf",
//   "place":"erode",
//   "date":"2024-08-12",
//   "time":"14:00",
//   "duration":3,
//   "attender":"public",
//   "permission":"granted",
//   "crowd":true,
//   "caseHistroy":"none"
// }
