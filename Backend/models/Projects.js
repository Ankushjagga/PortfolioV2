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
        type : Array,  
    },
    githubLink : {
        type : String
    },
    liveUrl :{
        type : String
    }
  
},   { timestamps: true })


const projectModel = new mongoose.model("project", Project)


module.exports = projectModel