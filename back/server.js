const express = require('express');
 require("./config/connect.js")
require('dotenv').config();
const cors = require('cors');
const colors= require("colors");


const app = express();


app.use(express.json());
app.use(cors());




const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server is active on port ${PORT} *_*`.green.underline.bold));
