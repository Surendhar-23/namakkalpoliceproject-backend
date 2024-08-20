const {
  addOfficer,
  getOfficers,
  editOfficer,
  deleteOfficer,
  getOfficerDuty,
} = require("../models/officer");

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

async function editOfficerController(req, res) {
  try {
    const officerId = req.params.id;
    const updatedOfficer = await editOfficer(officerId, req.body);
    res.status(200).json(updatedOfficer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
}

async function deleteOfficerController(req, res) {
  try {
    const officerId = req.params.id;
    const detetedOfficer = await deleteOfficer(officerId);
    res.status(200).json(detetedOfficer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
}

async function getOfficerDutyController(req, res) {
  try {
    const officerId = req.params.id;
    const officerDuty = await getOfficerDuty(officerId);
    console.log(officerDuty);

    res.status(200).json(officerDuty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
}

module.exports = {
  addOfficerController,
  getOfficerController,
  editOfficerController,
  deleteOfficerController,
  getOfficerDutyController,
};
