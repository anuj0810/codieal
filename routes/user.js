
const express=require('express');
const router=express.Router();
const passport=require('passport');
const LocalStrategy=require('passport-local');
const usersController=require('../controllers/users_controller');

router.use('/post',require('./post'))
router.get('/profile',usersController.profile);
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

router.post('/create', usersController.create)
//use passport as a middle ware to authenticate
router.post('/create_session', passport.authenticate(
    'local',
    {failureRedirect : '/user/sign-in'},
),usersController.createSession);

module.exports = router;
