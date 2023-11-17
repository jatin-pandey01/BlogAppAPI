const mongoose = require('mongoose');
require('dotenv').config();

const database = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log('Connection established successfully'))
    .catch((e)=>{console.log(`Error ${e.message}`); process.exit(1)});
}

module.exports = database;