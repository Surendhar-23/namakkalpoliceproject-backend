const Pin = require("./schema/pinSchema");

async function addPins(pinData) {
  const { latitude, longitude, label, description, type } = pinData;

  try {
    const pin = new Pin({ latitude, longitude, label, description, type });
    const newpin = await pin.save();
    return newpin;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getPins() {
  try {
    const pins = await Pin.find();
    return pins;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deletePin(pinId) {
  try {
    const pin = await Pin.findByIdAndDelete(pinId);
    return pin;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { addPins, getPins, deletePin };
