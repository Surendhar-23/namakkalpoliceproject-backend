const {
  getNormalForecast,
  getNormalForecastRange,
} = require("../models/normalforecast");
const Normalforecast = require("../models/schema/normalforecastschema");

function addNomralForcastController(req, res) {
  const { forecastType } = req.body;
  const { place } = req.body;
  const { date } = req.body;
  const { time } = req.body;
  const { duration } = req.body;
  const { attender } = req.body;
  const { permission } = req.body;
  const { crowd } = req.body;
  const { caseHistory } = req.body;

  const newEvent = new Normalforecast({
    forecastType,
    place,
    date,
    time,
    duration,
    attender,
    permission,
    crowd,
    caseHistory,
  });
  newEvent
    .save()
    .then((doc) => {
      console.log("New event saved:", doc);
      res.send("Event saved successfully");
    })
    .catch((err) => {
      console.error("Error saving event:", err);
      res.status(500).send("Error saving event");
    });
}

async function getNormalforecastController(req, res) {
  try {
    console.log(req.query);
    let { date, startDate, endDate } = req.query;

    let forecasts;

    if (startDate && endDate) {
      forecasts = await getNormalForecastRange(startDate, endDate);
    } else if (date) {
      forecasts = await getNormalForecast(date);
    } else {
      res.status(400).json({ error: "Date or date range is required" });
    }

    res.status(200).json(forecasts);
  } catch (err) {
    console.error("Error fetching normal forecasts:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { addNomralForcastController, getNormalforecastController };
