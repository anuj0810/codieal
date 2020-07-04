
const User = require('../models/user')

module.exports.profile=function(req,res){
    return res.render('user',{
        title:'user',
        name:'anuj'
    })
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

module.exports.createSession = function(req,res){
    return res.redirect('/');

}