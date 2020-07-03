const express= require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const cookieParser = require('cookie-parser')// to reading and writting through cookies
app.use(cookieParser());
const db = require('./config/mongoose');
app.use(expressLayouts);
app.use(express.static('./assets'));

app.use(express.urlencoded());

// extract style and script form sub pages into the layout
app.set('layout extractStyles',true)
app.set('layout extractScripts',true);


// use express router
app.use('/',require('./routes'))
app.set('view engine' , 'ejs');
//app.set('views',path.join(__dirname,'views')) you can use this one or below line work of both line is samenp
app.set('views','./views')

app.listen(port,function(err){
    if(err){ 
        //console.log('Error: ',err);
                  console.log(`Error in running server : ${err}`);
    }
    console.log(`ready to go on port no : ${port}`);
})