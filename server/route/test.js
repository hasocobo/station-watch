const express = require("express");
const router = express.Router();
const testController = require("../controllers/test");

router.post("/test", testController.createTest);
router.get("/tests", testController.getTests);
router.get("/tests/:id", testController.getTest);
router.put("/tests/:id/:userId", testController.updateTest);
router.put("/startTest/:id/:machineId", testController.startTest);
router.put("/finishTest/:id", testController.finishTest);
router.put("/stopTest/:id", testController.stopTest);
router.put("/assigntest/:id/:machineId", testController.assignTestToMachine);
router.delete("/test/:id", testController.deleteTest);

module.exports = router;