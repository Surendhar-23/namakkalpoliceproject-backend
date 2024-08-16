const Vipforecast = require("../models/schema/vipforecastschema");
const {
  getVIPForecast,
  getVIPForecastRange,
} = require("../models/vipforecast");

function addVipForcastController(req, res) {
  console.log(req.body);
  const { name } = req.body;
  const { place } = req.body;
  const { date } = req.body;
  const { time } = req.body;
  const { modeofArrival } = req.body;
  const { entryRoute } = req.body;
  const { exitRoute } = req.body;
  const { PlaceofStay } = req.body;
  const { crowd } = req.body;
  const { officer } = req.body;

  const newEvent = new Vipforecast({
    name,
    place,
    date,
    time,
    modeofArrival,
    entryRoute,
    exitRoute,
    PlaceofStay,
    crowd,
    officer,
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

async function getVipforecastController(req, res) {
  try {
    let { date, startDate, endDate } = req.query;
    console.log(req.query);

    let forecasts;

    if (startDate && endDate) {
      forecasts = await getVIPForecastRange(startDate, endDate);
    } else if (date) {
      forecasts = await getVIPForecast(date);
    } else {
      res.status(400).json({ error: "Date or date range is required" });
    }

    res.status(200).json(forecasts);
  } catch (err) {
    console.error("Error fetching normal forecasts:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { addVipForcastController, getVipforecastController };
