const express = require("express");
const router = express.Router();
const labController = require("../controllers/lab");

router.post("/labs", labController.createLab);
router.get("/labs", labController.getLabs);
router.get("/labs/:id", labController.getLab);
router.put("/labs/:id", labController.updateLab);
router.delete("/labs/:id", labController.deleteLab);



module.exports = router;
