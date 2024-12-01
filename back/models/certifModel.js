const mongoose = require('mongoose');
const Joi = require('joi');

// Schéma pour les certificats
const certifSchema = new mongoose.Schema(
  {
    logoCertif: {type:String},
    language: { type: String, required: true },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'], required: true }, // Niveau
    description: { type: String }, 
    course: { type: String, required: true },
  },
  {
    timestamps: true, 
  }
);

const Certif = mongoose.model('Certif', certifSchema);

const validateCertif = (certif) => {
  const schema = Joi.object({
    logoCertif: Joi.string().required(),
    language: Joi.string().required(),
    level: Joi.string().valid('Beginner', 'Intermediate', 'Advanced', 'Expert').required(),
    description: Joi.string().optional(),
    course: Joi.string().required(),
  });

  return schema.validate(certif);
};

module.exports = { Certif, validateCertif };
