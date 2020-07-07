const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const  Strategy  = require('passport');
const User = require('../models/user')

//authenticaion using passportok 
passport.use(new LocalStrategy({
    usernameField:'email'
},
function(email,password,done){
User.findOne({email:email},function(err,user){
    if(err){
        console.log('error')
        return done(err);
    }
    if(!user || user.password!=password){

        return done(null,false)

    }
    return done(null,user);

})

}
));
// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,  user.id)
})

//deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('error in finding the user')
           return done(err)
        }
        return done(null,user);
    })
})


// to send the user data to view
// check if the user is authenticated
passport.checkauthentication = function(req,res,next){
    //if the user is signed in , then pass on the request to the next funtion(controller's action)
    if(req.isAuthenticated()){
        return next();
    }
    //if th e user is not signed in
    return res.redirect('/user/sign-in');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        //res.user contains the current signed in user from the seesion cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;

    }
next();
}
module.exports = passport;