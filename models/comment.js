const mongoose = require('mongoose');
const post = require('./post');
const user = require('./user');
const commentSchema= new mongoose.Schema({
    content :{
        type: String,
        require:true
    },//comment belong to a user
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    post:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }

},{
    timestamps:true
})

const Comment=mongoose.model('Comment',commentSchema);
module.exports= Comment;