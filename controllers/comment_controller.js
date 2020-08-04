const userComment = require('../models/comment');


const Post=require("../models/post")
module.exports.create= async function(req,res){
    let post = await Post.findById(req.body.post)
       try{ if(post){
          let comment=  await userComment.create({
            content: req.body.content,
            user: req.user._id,
            post: req.body.post
        }) 
           post.comments.push(comment);
           post.save();
          res.redirect('back');
    }
}
catch(err){
console.log('Error',err);
}
}

            
   module.exports.destroy= async function(req,res){
       try{
    let comment= await userComment.findById(req.params.id)
       if(comment.user == req.user.id){
           let postId=comment.post;
            comment.remove();
            Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}})
            req.flash('success', 'Comment deleted!');

            return res.redirect('back');
        }else{
            req.flash('error', 'Unauthorized');
            return res.redirect('back');
        }
    }
    catch(err){
        req.flash('error', err);
        return;
    }
   }
