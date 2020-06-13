const express= require('express');
const app=express();
const port=8000;
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