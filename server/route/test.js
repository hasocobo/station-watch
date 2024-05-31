const express = require("express");
const router = express.Router();
const testController = require("../controllers/test");
const authController = require("../controllers/user");


router.post("/tests", authController.extractUserId,testController.createTest);
router.get("/tests", testController.getTests);
router.get("/tests/:id", testController.getTest);
router.put("/tests/:id",authController.extractUserId,testController.updateTest);

router.put("/tests/assign/:id", authController.extractUserId, testController.assign);

router.put("/tests/:id/start", testController.startTest);
router.put("/tests/:id/finish", testController.finishTest);
router.put("/tests/:id/stop", testController.stopTest);
router.delete("/tests/:id", testController.deleteTest);

module.exports = router;


