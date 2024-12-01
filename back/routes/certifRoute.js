const express = require('express');
const router = express.Router();
const {createCertif,getAllCertifs,getCertifById} = require('../controllers/certifController.js');

router.post('/create_certif', createCertif);

router.get('/certifs', getAllCertifs);

router.get('/get_one/:id', getCertifById);

module.exports = router;
