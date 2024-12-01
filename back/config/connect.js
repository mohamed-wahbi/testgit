const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.DBconnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to the database *_*'.gray.underline.bold))
    .catch((error) => console.error('Database connection failed:', error));

module.exports = mongoose;


