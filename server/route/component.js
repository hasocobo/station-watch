const express = require("express");
const router = express.Router();
const componentController = require("../controllers/component");

router.post("/components", componentController.createComponent);
router.get("/components", componentController.getComponents);
router.get("/components/:id", componentController.getComponent);
router.put("/components/:id", componentController.updateComponent);
router.delete("/components/:id", componentController.deleteComponent);
router.put("/components/:componentId/station/:stationId", componentController.assignComponentToMachine);
router.put("/components/:componentId/unassign/:stationId", componentController.unassignComponentFromMachine);


module.exports = router;