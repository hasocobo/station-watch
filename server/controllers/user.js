const User = require('../models/user');

const jwt = require('jsonwebtoken');

const secretKey = 'hci2024'; // Güvenli bir şekilde saklayın


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
        const user = await User.findOne({ username  });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // use comparePassword method from user model
        if (!user.comparePassword(password)) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '15m' });

       //res.cookie('jwt',token);
        res.status(200).json({ success: true, user, token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

// Path: server/models/lab.js
// Compare this snippet from server/models/station.js:
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



exports.authenticateJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(403).json({ message: 'Token required' });
    }
  
    const token = authHeader.split(' ')[1];
    console.log(token);
  
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = user;
       next();
    });
  };

exports.extractUserId = async (req,res,next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(403).json({ message: 'Token required' });
    }
  
    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, secretKey);
    req.userId = payload.id; 

    next();
}