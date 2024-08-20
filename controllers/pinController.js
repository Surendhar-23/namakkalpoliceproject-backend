const { addPins, getPins, deletePin } = require("../models/pins");
async function addPinsController(req, res) {
  const { latitude, longitude, label, description, type } = req.body;
  if (!latitude || !longitude || !label || !description || !type) {
    return res.status(400).json({
      message: "Latitude, longitude, label, description, and type are required",
    });
  }

  try {
    const pin = await addPins(req.body);
    res.status(201).json(pin);
  } catch (err) {
    res.status(500).json({ message: "Error saving pin", error: err });
  }
}

async function getPinsController(req, res) {
  try {
    const pins = await getPins();
    res.status(200).json(pins);
  } catch (err) {
    console.error("Error fetching pins:", err);
    res.status(500).json({ message: "Error fetching pins", error: err });
  }
}

async function deletePinsController(req, res) {
  try {
    const pin = await deletePin(req.params.id);
    if (!pin) {
      return res.status(404).json({ message: "Pin not found" });
    }
    res.status(200).json({ message: "Pin deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting pin", error: err });
  }
}

module.exports = { addPinsController, getPinsController, deletePinsController };
