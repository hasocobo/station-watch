const express = require("express");
const router = express.Router();
const testController = require("../controllers/test");
const authController = require("../controllers/user");


router.post("/tests",authController.authenticateJWT, authController.extractUserId,testController.createTest);
router.get("/tests",authController.authenticateJWT, testController.getTests);
router.get("/tests/:id",authController.authenticateJWT, testController.getTest);
router.put("/tests/:id",authController.authenticateJWT, authController.extractUserId,testController.updateTest);


router.put("/tests/:id/start", testController.startTest);
router.put("/tests/:id/finish", testController.finishTest);
router.put("/tests/:id/stop", testController.stopTest);
router.put("/tests/:id/assign", testController.assignTestToMachine);
router.delete("/tests/:id", testController.deleteTest);

module.exports = router;


