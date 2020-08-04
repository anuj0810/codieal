const User = require('../models/user')
const user = require('../models/user')


module.exports.profile=function(req,res){
    User.findById(req.params.id,function(err,user){

        return res.render('user',{
            title:'user',
            profileUser:user
        })
    })
   
}

module.exports.update = function(req,res){
    if(req.user.id==req.params.id){
User.findByIdAndUpdate(req.params.id, req.body, function(err,user){   // req.body
    return res.redirect('back');
})
    }
    else{
        return res.status(401).send('UnAutherized')
    }
}

module.exports.signUp=function(req,res){

    if(req.isAuthenticated()){
       return res.redirect('/')
    }

    return res.render('user_sign_up',{
        title:'codiel|sign_up'
    })
}

module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
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
    req.flash('success','Logged in successfully');
    return res.redirect('/');

}
module.exports.signOut = function(req,res){
   
     req.logout();
     req.flash('success','Logged out successfully');
    return res.redirect('/');

}

