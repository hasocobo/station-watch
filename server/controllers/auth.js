const User = require('../models/user');

exports.signup = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const user = new User({
        username,
        password,
        role,
        });
        await user.save();
        res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username , password });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // use comparePassword method from user model
        if (!user.comparePassword(password)) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        res.status(200).json({ success: true, user });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}