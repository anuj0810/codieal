// to set up the express
const express= require('express');
const app=express();
const port=8000;


const expressLayouts=require('express-ejs-layouts');

const cookieParser = require('cookie-parser')// to reading and writting through cookies

const db = require('./config/mongoose');

const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');  
const MongoStore= require('connect-mongo')(session);

//connnect node with sass
const sassMiddleware= require('node-sass-middleware');

app.use(sassMiddleware({
        /* Options */
        src: './assets/scss'
      , dest: './assets/css'
      , debug: true
      , outputStyle: 'extended'
      , prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
    }) );


app.use(expressLayouts);
app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(cookieParser());
// extract style and script form sub pages into the layout
app.set('layout extractStyles',true)
app.set('layout extractScripts',true);



app.set('view engine' , 'ejs');
//app.set('views',path.join(__dirname,'views')) you can use this one or below line work of both line is samenp
app.set('views','./views')


 //mongo store is used to store the  session cookie in the db
app.use(session({
    name:'codeial',
    //change the secret before deployment in production mode
    secret:'blahsomthing',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    } 
,
store: new MongoStore(
    {
        mongooseConnection:db,
        autoRemove:'disabled'
    },
    function(err){
        console.log(err|| 'connect mongodb sertup ok');
    }
)

}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// use express router
app.use('/',require('./routes'))

app.listen(port,function(err){
    if(err){ 
        //console.log('Error: ',err);
                  console.log(`Error in running server : ${err}`);
    }
    console.log(`ready to go on port no : ${port}`);
})