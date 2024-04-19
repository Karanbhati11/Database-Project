const mongoose = require("mongoose");
module.exports = () => {

const connectionStr = "mongodb+srv://sparsh:password1884@cluster0.afvsm2s.mongodb.net/";

try{
    mongoose.connect(connectionStr);
    console.log("Mongodb Connected");
}
catch(error){
    console.log(error);
}
}