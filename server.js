const express = require('express');
const dotenv = require('dotenv');

//Router file
const bootcamps = require('./routes/bootcamps')

//Load envi file
dotenv.config({path:'./config/config.env'});

const app =express();

//Mount router
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is runing ${process.env.NODE_ENV} mode on port ${PORT}`));
