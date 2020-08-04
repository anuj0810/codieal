const userPost = require('../models/post');
const comment= require('../models/comment');

module.exports.create= async function(req,res){
  try{
    await userPost.create({
        content:req.body.content,
        user:req.user._id
    })
    // },function(err,post){
    //     if(err){
    //         console.log('error in creating a post');return;
    //     }  
        return res.redirect('/');
    }
    catch(err){
console.log('Error',err)
return ;
}
}

//    module.exports.destroy = function(req,res){
//        userPost.findById(req.params.id,function(err,post){
//            if(err){
//                console.log("error here");
//                return;
//            }

//            if(post.user == req.user.id){
//                post.remove();

//                comment.deleteMany({post:req.params.id},function(err){
//                    if(err){
//                        console.log('err here')
//                        return;
//                    }
//                    return res.redirect('back');
//                })
//            }
//            else{
//                res.redirect('back');
//            }
//        })

//    }

//destroy using async and wait
module.exports.destroy = async function(req,res){
   try{ 
       let post = await userPost.findById(req.params.id);
        if(post.user == req.user.id){
            post.remove();

            await comment.deleteMany({post:req.params.id});
                return res.redirect('back');
           
        }
        else{
            res.redirect('back');
        }
    }
    catch(err){
        console.log("Error",err);
        return;
    }
}
