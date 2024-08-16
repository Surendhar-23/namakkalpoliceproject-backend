const { addOfficer, getOfficers } = require("../models/officer");

async function addOfficerController(req, res) {
  try {
    const officer = await addOfficer(req.body);
    res.status(200).json(officer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
}

async function getOfficerController(req, res) {
  try {
    let officers;
    officers = await getOfficers();
    res.status(200).json(officers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
}

module.exports = { addOfficerController, getOfficerController };
