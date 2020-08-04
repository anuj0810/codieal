const Post=require('../models/post');
const { populate } = require('../models/post');
const User = require('../models/user');
// module.exports.home = function(req, res){
  
    // Post .find({},function(req,Posts){
    //     return res.render('home',{
    //        title: "Codieal| Home",
    //        posts:posts

    //     });
    // });

//     Post.find({})
//     .populate('user')
//     .populate({
//         path:'comments', // to print the comments along with post 
//         populate:{
//             path:'user',  // to print the user details with each comment
//         }
//     })
//     .exec(function(err,posts){ // so populate is used when we need to fatch complete other model not just id see in this case if we didn't populate then in view part we can't able to fetch the use name because acc  to post schema we have only user id so to get the complete user schema you have to populate it
//        User.find({},function(err,users){
//         return res.render('home', {  // and the exec function used whenever we use populate 
//             title: "Home",
//             posts:posts,
//             all_users:users
           
//         });
//        })
    
//     })
// }


// lets use async and await for to do the above code in simple manner
module.exports.home =  async function(req, res){
    try{
   let posts= await Post.find({})
    .populate('user')
    .populate({
        path:'comments',  
        populate:{
            path:'user', 
        }
    })
      let users= await User.find({})

        return res.render('home', {  
            title: "Home",
            posts:posts,
            all_users:users
           
        });
}
catch(err){
    console.log('Error',err)
    return;
}
}