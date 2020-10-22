const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors  = require('colors');
const connectDB =  require('./config/db');
//Load envi file
dotenv.config({path:'./config/config.env'});

//Coonect DB
connectDB();

//Router file
const bootcamps = require('./routes/bootcamps')

const app =express();

//Body parser
app.use(express.json());

//middlewaare
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
}

//Mount router
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server =  app.listen(PORT, console.log(`server is runing ${process.env.NODE_ENV} mode on port ${PORT}`.bgWhite.black));

//Handle rejection 

process.on('unhandledRejection', (err,promise) => {
    console.log(`Error : ${err.message}`);
    server.close( () => process.exit(1));
})