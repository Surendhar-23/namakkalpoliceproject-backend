const Normalforecast = require("./schema/normalforecastschema");

async function getNormalForecast(getDate) {
  try {
    const results = await Normalforecast.find({ date: getDate }).exec();
    return results;
  } catch (err) {
    console.error("Error fetching normal forecasts:", err);
    throw err;
  }
}

async function getNormalForecastRange(startDate, endDate) {
  try {
    const results = await Normalforecast.find({
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

module.exports = { getNormalForecast, getNormalForecastRange };
