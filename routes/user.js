const express=require('express');
const router=express.Router();
const usersController=require('../controllers/users_controller');

router.use('/post',require('./post'))
router.get('/profile',usersController.profile);

module.exports = router;
