const express = require("express");
const router = express.Router();
const labController = require("../controllers/lab");
const authController = require("../controllers/user");

router.post("/labs", authController.extractUserRole,authController.extractUserId,labController.createLab);
router.get("/labs",labController.getLabs);
router.get("/labs/:id", labController.getLab);
router.put("/labs/:id",authController.extractUserRole, labController.updateLab); 
router.delete("/labs/:id",authController.extractUserRole, labController.deleteLab);

module.exports = router;
