const Vipforecast = require("./schema/vipforecastschema");

async function getVIPForecast(getDate) {
  try {
    const results = await Vipforecast.find({ date: getDate }).exec();
    return results;
  } catch (err) {
    console.error("Error fetching normal forecasts:", err);
    throw err;
  }
}

async function getVIPForecastRange(startDate, endDate) {
  try {
    const results = await Vipforecast.find({
      date: {
        $gte: startDate,
        $lte: endDate,
      },
    }).exec();
    return results;
  } catch (err) {
    console.error("Error fetching normal forecasts:", err);
    throw err;
  }
}

module.exports = { getVIPForecast, getVIPForecastRange };
