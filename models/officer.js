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

async function editOfficer(officerId, updatedData) {
  try {
    const updatedOfficer = await Officer.findOneAndUpdate(
      { id: officerId },
      updatedData,
      { new: true } // Return the updated officer
    );
    if (!updatedOfficer) {
      throw new Error(`Officer with ID ${officerId} not found`);
    }
    return updatedOfficer;
  } catch (error) {
    console.error("Error editing officer:", error);
    throw error;
  }
}

async function deleteOfficer(officerId) {
  try {
    const deletedOfficer = await Officer.findOneAndDelete({ id: officerId });
    if (!deletedOfficer) {
      throw new Error(`Officer with ID ${officerId} not found`);
    }
    return deletedOfficer;
  } catch (error) {
    console.error("Error deleting officer:", error);
    throw error;
  }
}

async function getOfficerDuty(officerId) {
  try {
    const officerDuty = await Officer.findOne({ id: officerId }).populate({
      path: "duties",
      options: { sort: { date: -1 } }, // Sort by date in descending order
    });
    console.log(officerDuty);

    if (!officerDuty) {
      throw new Error(`Officer with ID ${officerId} not found`);
    }
    return officerDuty;
  } catch (error) {
    console.error("Error fetching officer duty:", error);
    throw error;
  }
}

module.exports = {
  addOfficer,
  getOfficers,
  addDutytoOfficer,
  editOfficer,
  deleteOfficer,
  getOfficerDuty,
};
