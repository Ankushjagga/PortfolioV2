const mongoose = require("mongoose");


const connect = async  () =>{
     mongoose.connect(process.env.CONNECTION_STRING).then(res=>{
        console.log("DB connection Sucessfully");
        
     }).catch(err=>{
        console.log("DB ERROR", err);
     })
}

module.exports = connect