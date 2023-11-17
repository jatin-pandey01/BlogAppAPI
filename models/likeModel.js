const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId, // taking id from some Schema
        ref:"Post",  //reference to the post model
    },
    user:{
        type: String,
        required:true,
    },
});

module.exports = mongoose.model('Like',likeSchema);