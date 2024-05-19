const express = require("express");
const router = express.Router();
const labController = require("../controllers/lab");
const authController = require("../controllers/user");

router.post("/labs", authController.extractUserId,authController.authenticateJWT,labController.createLab);
router.get("/labs", authController.authenticateJWT,labController.getLabs);
router.get("/labs/:id", labController.getLab);
router.put("/labs/:id", labController.updateLab); 
router.delete("/labs/:id", labController.deleteLab);

module.exports = router;
