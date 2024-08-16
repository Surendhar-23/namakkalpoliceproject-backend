const Officer = require("./schema/officerSchema");

async function addOfficer(officerData) {
  try {
    const newOfficer = new Officer(officerData);
    const newOfficerData = await newOfficer.save();
    return newOfficerData;
  } catch (error) {
    console.error("Error adding duties:", error);
    throw error;
  }
}

async function getOfficers() {
  try {
    const results = await Officer.find().exec();
    return results;
  } catch (err) {
    console.error("Error fetching normal forecasts:", err);
    throw err;
  }
}

module.exports = { addOfficer, getOfficers };
