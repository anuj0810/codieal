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

passport.serializeUser(function(user,done){
    done(null,user.id)
})

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('error in finding the user')
           return done(err)
        }
        return done(null,user);
    })
})

module.exports = passport;