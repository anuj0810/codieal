const User = require('../models/user')
module.exports.profile=function(req,res){
   if (req.cookies.userId){
       User.findById(req.cookies.userId, function(err,user){
           if(user){
                return res.render('user',{
                     title:"User profile",
                     user:user,
                    //  email:user.email
                 })
           }
           return res.redirect('/user/sign-in');
       })

   }
   else{
       return res.redirect('/user/sign-in');
   }
}

module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:'codiel|sign_up'
    })
}

module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:'co diel|sign_in'
    })
}

//get the sign up data
module.exports.create = function(req,res){
if(req.body.password != req.body.confirm_password){
    return res.redirect('back');
   
}
User.findOne({email:req.body.email},function(err,user){
if(err){console.log('error in finding use in signing up');return}
if(!user){
    User.create(req.body, function(err,user){
        if(err){console.log('error in finding use in signing up'); return}

        return res.redirect('/user/sign-in');
    })
}
else{
    return res.redirect('/user/sign-in');
}
});
}

//get the sign in data

module.exports.create_session = function(req,res){
    User.findOne({email: req.body.email },function(err,user){
        if(err){
            console.log("there is error on signing in the user")
            return;
        }
        if(user){
        if(user.password!=req.body.password){
            return res.redirect('back')
        }
       
             res.cookie('userId',user.id);
            return res.redirect('/user/profile');
      
    }
    else{
        return res.redirect('back');
    }
    });
    
}

//sign out

module.exports.signOut= function(req,res){

       res.clearCookie('userId'); 

       return res.redirect('/user/sign-in'); 
    }
        
    