const express = require("express");
const router = express.Router();
const authController = require("../controllers/user");

router.post("/login", authController.login);
router.post("/signup", authController.signup);
router.put("/users/:id", authController.updateUser);
router.get("/users/:id", authController.getUser);
router.delete("/users/:id", authController.deleteUser);


module.exports = router;
