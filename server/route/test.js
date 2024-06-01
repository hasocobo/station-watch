const express = require("express");
const router = express.Router();
const testController = require("../controllers/test");
const authController = require("../controllers/user");


router.post("/tests", authController.extractUserRole,authController.extractUserId,testController.createTest);
router.get("/tests", testController.getTests);
router.get("/tests/:id", testController.getTest);
router.put("/tests/:id",authController.extractUserId,testController.updateTest);

router.put("/tests/assign/:id", authController.extractUserRole,authController.extractUserId, testController.assign);

router.put("/tests/:id/start", authController.extractUserRole,testController.startTest);
router.put("/tests/:id/finish", authController.extractUserRole,testController.finishTest);
router.put("/tests/:id/stop", authController.extractUserRole,testController.stopTest);
router.delete("/tests/:id", authController.extractUserRole,testController.deleteTest);

module.exports = router;


