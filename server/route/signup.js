const User = require("../models/user");
const crypto = require("crypto");
const express = require("express");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, role, email, password } = req.body;
  try {
    const newUser = new User({
      name,
      role,
      email,
      password,
});
    await newUser.save();
    res.status(201).send({ message: "User created", data: newUser });
    } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
);

router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send({ message: error.message });

}
});

module.exports = router;