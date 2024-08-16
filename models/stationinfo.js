const StationInfo = require("./schema/stationdetailSchema");

async function getStationInfo() {
  try {
    const results = await StationInfo.find().exec();
    return results;
  } catch (err) {
    console.error("Error fetching normal forecasts:", err);
    throw err;
  }
}

module.exports = { getStationInfo };
