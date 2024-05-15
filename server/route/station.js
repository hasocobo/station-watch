const express = require("express");
const router = express.Router();
const stationController = require("../controllers/station");

router.post("/stations/:labid", stationController.createStation);
router.get("/stations", stationController.getStations);
router.get("/stations/:id", stationController.getStation);
router.put("/stations/:id", stationController.updateStation);
router.delete("/stations/:id", stationController.deleteStation);

module.exports = router;