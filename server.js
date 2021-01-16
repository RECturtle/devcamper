const express = require('express');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

// init express to app
const app = express();

// access port
const PORT = process.env.PORT || 5000;

// set listen port
app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);