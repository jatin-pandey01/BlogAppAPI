//Import mongoose
const mongoose = require('mongoose');

//Handler
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{ // This is likes array
        type: mongoose.Schema.Types.ObjectId,
        ref:'Like',
    }], 
    comments:[{  // This is comments array
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment',
    }]
});

module.exports = mongoose.model('Post',postSchema);