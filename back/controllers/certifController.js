const asyncHandler = require('express-async-handler');
const { Certif, validateCertif } = require('../models/certifModel');

const createCertif = asyncHandler(async (req, res) => {
  const { error } = validateCertif(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { logoCertif, language, level, description, course } = req.body;

  const newCertif = new Certif({
    logoCertif,
    language,
    level,
    description,
    course,
  });

  const savedCertif = await newCertif.save();
  res.status(201).json(savedCertif);
});



const getAllCertifs = asyncHandler(async (req, res) => {
  const certifs = await Certif.find();
  res.status(200).json(certifs);
});



const getCertifById = asyncHandler(async (req, res) => {
    const id = req.params.id;
  
    // Recherche du certificat par ID
    const certifById = await Certif.findById(id);
  
    // Si le certificat n'est pas trouvé, on renvoie une erreur 404
    if (!certifById) {
      return res.status(404).json({ message: 'Certificat non trouvé.' });
    }
  
    // Si le certificat est trouvé, on renvoie une réponse avec les détails
    res.status(200).json({
      certif: certifById // Renvoi du certificat trouvé
    });
  });
  

module.exports = {
  createCertif,
  getAllCertifs,
  getCertifById,
};
