const express = require("express");
const router = express.Router();
const testController = require("../controllers/test");
const authController = require("../controllers/user");


router.post("/tests",authController.authenticateJWT, authController.extractUserId,testController.createTest);
router.get("/tests", testController.getTests);
router.get("/tests/:id", testController.getTest);
router.put("/tests/:id", testController.updateTest);

/*
/tests/:id/stopTest
/tests/:id/finish
/tests/:id/assign

/startTest/:id/:machineId
/finishTest/:id
/stopTest/:id
/assigntest/:id/:machineId
/test/:id

*/




router.put("/tests/:id/start", testController.startTest);
router.put("/tests/:id/finish", testController.finishTest);
router.put("/tests/:id/stopTest", testController.stopTest);
router.put("/tests/:id/assign", testController.assignTestToMachine);
router.delete("/tests/:id", testController.deleteTest);

module.exports = router;


