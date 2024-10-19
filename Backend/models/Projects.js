const mongoose = require("mongoose")


const Project = new mongoose.Schema({
    name : {
        type : String,
        
    },
    description : {
        type :String,
    },
    image : {
        type : String
    },
     languages : {
        type : String,  
    },
  
},   { timestamps: true })


const projectModel = new mongoose.model("project", Project)


module.exports = projectModel