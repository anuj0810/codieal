const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://codieal-yqsjt.mongodb.net/codeial');
const db = mongoose.connection;

db.on('error',console.error.bind(console,"error connecting to MongoDb"));
db.once('open',function(){
    console.log('connected to Database:: mongoDB Atlas')
});
module.exports=db;

