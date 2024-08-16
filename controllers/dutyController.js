const { addDuty, getDuty } = require("../models/duty");

async function addDutyController(req, res) {
  try {
    const duty = await addDuty(req.body);
    res.status(200).json(duty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
}

async function getDutyController(req, res) {
  try {
    let { date } = req.query;
    let duties;
    duties = await getDuty(date);
    res.status(200).json(duties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
}

module.exports = {
  addDutyController,
  getDutyController,
};
