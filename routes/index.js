const express = require('express');
 const router = express.Router();
const homeController=require('../controllers/home_controller');

console.log("its route index file")
router.get('/',homeController.home);
router.use("/user",require("./user"));

router.use('/post',require('./post'))

 module.exports = router; 