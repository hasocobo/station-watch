const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

const authenticateUser = loginController.authenticateUser;

router.post('/login', loginController.logIn);

//login'le alakalı değil, test amaçlı, daha sonra kaldır.
router.get('/home', authenticateUser, loginController.getHome);


module.exports = router;