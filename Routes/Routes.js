const express = require("express");
const router = express.Router();
const {
  addDutyController,
  getDutyController,
} = require("../controllers/dutyController");
const {
  getStationInfoController,
} = require("../controllers/stationinfoController");
const {
  addOfficerController,
  getOfficerController,
} = require("../controllers/officerController");
const {
  addNomralForcastController,
  getNormalforecastController,
} = require("../controllers/normalforecastController");

const {
  addVipForcastController,
  getVipforecastController,
} = require("../controllers/vipforecastController");
const {
  userloginController,
  userregisterController,
} = require("../controllers/userLoginController");

// login
router.post("/login", userloginController);
router.post("/register", userregisterController);

// Duty routes

router.post("/addduty", addDutyController);
router.get("/duty", getDutyController);

// Officer routes

router.post("/addofficer", addOfficerController);
router.get("/officer", getOfficerController);

// station routes

router.get("/stationinfo", getStationInfoController);

// Forecast routes

router.post("/addnormalforecast", addNomralForcastController);
router.post("/addvipforecast", addVipForcastController);

router.get("/normalforecast", getNormalforecastController);
router.get("/vipforecast", getVipforecastController);

module.exports = router;
