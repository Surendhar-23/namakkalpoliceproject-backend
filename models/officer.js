const Officer = require("./schema/officerSchema");

async function addOfficer(officerData) {
  try {
    const newOfficer = new Officer(officerData);
    const newOfficerData = await newOfficer.save();
    return newOfficerData;
  } catch (error) {
    console.error("Error adding officer:", error);
    throw error;
  }
}

async function getOfficers() {
  try {
    const results = await Officer.find().exec();
    return results;
  } catch (err) {
    console.error("Error fetching officers:", err);
    throw err;
  }
}

async function addDutytoOfficer(dutyData) {
  try {
    const officer = await Officer.findOne({ id: dutyData.id });
    if (officer) {
      officer.duties.push(dutyData._id);
      await officer.save();
    } else {
      throw new Error(`Officer with ID ${officerId} not found`);
    }
  } catch (error) {
    console.error("Error adding duty to officer:", error);
    throw error;
  }
}

module.exports = { addOfficer, getOfficers, addDutytoOfficer };
