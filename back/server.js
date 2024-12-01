const express = require('express');
 require("./config/connect.js")
require('dotenv').config();
const cors = require('cors');
const colors= require("colors");
const authRoutes = require('./routes/authRoute'); 
const certifRoutes = require('./routes/certifRoute'); 


const app = express();


app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/certif', certifRoutes);



const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server is active on port ${PORT} *_*`.green.underline.bold));
