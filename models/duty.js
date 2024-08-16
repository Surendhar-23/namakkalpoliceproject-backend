const Duty = require("./schema/dutySchema");

async function addDuty(dutyArray) {
  try {
    const savedDuties = [];
    for (const dutyData of dutyArray) {
      const newDuty = new Duty({
        name: dutyData.name,
        mode: dutyData.mode,
        duty: dutyData.duty,
        date: dutyData.date,
      });
      const savedDuty = await newDuty.save();
      savedDuties.push(savedDuty);
    }
    return savedDuties;
  } catch (error) {
    console.error("Error adding duties:", error);
    throw error;
  }
}

async function getDuty(getDate) {
  try {
    const results = await Duty.find({ date: getDate }).exec();
    return results;
  } catch (err) {
    console.error("Error fetching normal forecasts:", err);
    throw err;
  }
}

module.exports = { addDuty, getDuty };
