const User = require("../models/user");
const crypto = require("crypto");
const express = require("express");

const router = express.Router();

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "User found", data: user });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
);