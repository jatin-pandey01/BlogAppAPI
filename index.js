const express = require('express'); // importing express in 'express' variable
const app = express(); // created an application app using express
const database = require('./config/database');
database();

require('dotenv').config();

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`I'm at ${port} port`);
});

app.get('/',(req,res)=>{
    res.send(`<h1> This is Jatin Page Baby </h1>`);
});

//Middleware
app.use(express.json());

const router = require('./routes/router');

//mount
app.use('/api/v1',router);