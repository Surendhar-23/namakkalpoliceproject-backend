const { getStationInfo } = require("../models/stationinfo");

async function getStationInfoController(req, res) {
  try {
    let stationInfo = await getStationInfo();
    res.status(200).json(stationInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
}

module.exports = { getStationInfoController };
