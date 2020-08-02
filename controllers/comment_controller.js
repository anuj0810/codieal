const userComment = require('../models/comment');

const Post=require("../models/post")
module.exports.create=function(req,res){
    Post.findById(req.body.post, function(err,post){
        if(err){
            console.log('error in saving the comment in post model');return;
        }
        if(post){
            userComment.create({
            content: req.body.content,
            user: req.user._id,
            post: req.body.post
        },function(err,comment){
            if(err){
                console.log('error in saving the comment in post model');return;
            }
            post.comments.push(comment);
            post.save();
            
           res.redirect('back');
        })

    }
  
})
    
   
}