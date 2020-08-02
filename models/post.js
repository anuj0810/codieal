const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({

    content:{
        type:String,
        required:true
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    //including the array of ids of all commnets in this post schema itself.
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{
    timestamps:true
});

const Post = mongoose.model('Post',postSchema);
module.exports=Post;