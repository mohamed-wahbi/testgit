const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 8 },
    avatar:{type:String}
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

function registerVerify(obj) {
    const schema = Joi.object({
        username: Joi.string().trim().min(2).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().trim().min(8).required(),
    });
    return schema.validate(obj);
}

function loginVerify(obj) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().trim().min(8).required(),
    });
    return schema.validate(obj);
}

module.exports = { User, registerVerify, loginVerify };
