const userPost = require('../models/post');
const comment= require('../models/comment');

module.exports.create=function(req,res){
    userPost.create({
        content:req.body.content,
        user:req.user._id
    })
    // },function(err,post){
    //     if(err){
    //         console.log('error in creating a post');return;
    //     }  
        return res.redirect('/');
    }
   
