const express= require('express');
const app=express();
const port=8000;
// use express router
app.use('/',require('./routes'))
app.listen(port,function(err){
    if(err){
        //console.log('Error: ',err);
                  console.log(`Error in running server : ${err}`);
    }
    console.log(`ready to go on port no : ${port}`);
})