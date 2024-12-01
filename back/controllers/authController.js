const asyncHandler = require('express-async-handler');
const { User, registerVerify, loginVerify } = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.registerCtrl = asyncHandler(async (req, res) => {
    const { error } = registerVerify(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    let size = 200;
    req.body.avatar="https://gravatar.com/avatar/?s="+size+"&d=retro";

    const newUser = new User({ ...req.body, password: hashedPassword });


    await newUser.save();

    res.status(201).json({
         message: 'You registered successfully, please log in',
         user: newUser

     });
});




module.exports.loginCtrl = asyncHandler(async (req, res) => {
    const { error } = loginVerify(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user._id, username: user.username }, 'wahbiDevCode', { expiresIn: '1h' });

    res.status(200).json({
        _id: user._id,
        username: user.username,
        token,
    });
});



module.exports.getUserByEmail = asyncHandler (async(req,res)=>{
    const userByEmeil = await User.findOne ({email:req.body.email})
    if(!userByEmeil){
        res.status(400).json({message:"pas d'utilisateur avec cette email! s'il vous plais Register."})
     }

     res.status(200).json({
        user:userByEmeil
    })
})