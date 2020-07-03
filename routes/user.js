const express=require('express');
const router=express.Router();
const usersController=require('../controllers/users_controller');

router.use('/post',require('./post'))
router.get('/profile',usersController.profile);
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

router.post('/create', usersController.create)

router.post('/create_session',usersController.create_session)

router.get('/signOut/',usersController.signOut)

module.exports = router;
