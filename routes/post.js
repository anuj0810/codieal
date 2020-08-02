const express = require('express');
const passport = require('passport')
const router=express.Router();
const postController = require('../controllers/post_controller');
router.post('/create', passport.checkauthentication, postController.create);
router.get('/destroy/:id',passport.checkauthentication,postController.destroy)

module.exports = router; 