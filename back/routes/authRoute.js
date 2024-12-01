const express = require('express');
const { registerCtrl, loginCtrl, getUserByEmail } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerCtrl);

router.post('/login', loginCtrl);

router.post("/getone", getUserByEmail)

module.exports = router;
