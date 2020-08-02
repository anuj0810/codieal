const express = require('express');
const router = express.Router();
const passport = require('passport')

const commentController = require('../controllers/comment_controller');
const { resolveInclude } = require('ejs');
router.post('/create',passport.checkauthentication  ,commentController.create);
router.get('/destroy/:id',passport.checkauthentication,commentController.destroy);

module.exports = router; 