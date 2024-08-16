const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StationDetailsSchema = new Schema({
  strengthParticulars: {
    sanctionedStrength: {
      Insp: Number,
      SI: Number,
      WSI: Number,
      SSI: Number,
      HC: Number,
      GR_I: Number,
      GR_II: Number,
      Total: Number,
    },
    actualStrength: {
      Insp: Number,
      SI: Number,
      WSI: Number,
      SSI: Number,
      HC: Number,
      GR_I: Number,
      GR_II: Number,
      Total: Number,
    },
    shortageStrength: {
      Insp: Number,
      SI: Number,
      WSI: Number,
      SSI: Number,
      HC: Number,
      GR_I: Number,
      GR_II: Number,
      Total: Number,
    },
    excessStrength: {
      Insp: Number,
      SI: Number,
      WSI: Number,
      SSI: Number,
      HC: Number,
      GR_I: Number,
      GR_II: Number,
      Total: Number,
    },
  },
});

const GovernmentPropertySchema = new Schema({
  PA_Cash: Number,
  RWS: {
    from: Number,
    to: Number,
  },
  BWS: {
    from: Number,
    to: Number,
  },
  pistol_9mm: Number,
  rounds: Number,
  musket_410: Number,
  buckShot: Number,
  blank: Number,
  dummy: Number,
  rifle_303: Number,
  rounds_303: Number,
  handCuff: Number,
  challan: Number,
  pumpActionGun: Number,
  LChain: Number,
  W_T: Number,
  others: String,
});

const StationSchema = new Schema({
  stationDetails: StationDetailsSchema,
  governmentProperty: GovernmentPropertySchema,
});

module.exports = mongoose.model("StationInfo", StationSchema);
