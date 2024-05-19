const express = require("express");
const router = express.Router();
const machineController = require("../controllers/machine");

router.post("/machine", machineController.createMachine);
router.get("/machines", machineController.getMachines);
router.get("/machines/:id", machineController.getMachine);
router.put("/machines/:id", machineController.updateMachine);
router.delete("/machines/:id", machineController.deleteMachine);
router.put("/machines/:machineId/station/:stationId", machineController.assignMachineToStation);
router.put("/machines/:machineId/unassign/:stationId", machineController.unassignMachineFromStation);
module.exports = router;