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
   module.exports.destroy = function(req,res){
       userPost.findById(req.params.id,function(err,post){
           if(err){
               console.log("error here");
               return;
           }

           if(post.user == req.user.id){
               post.remove();

               comment.deleteMany({post:req.params.id},function(err){
                   if(err){
                       console.log('err here')
                       return;
                   }
                   return res.redirect('back');
               })
           }
           else{
               res.redirect('back');
           }
       })

   }

