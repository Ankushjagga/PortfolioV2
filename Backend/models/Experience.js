const mongoose = require("mongoose")


const experienceSchema = new mongoose.Schema({
    company: {
        type: String,
    },
    year :{
        type: Number,
       
    },
    description :{
        type : Array
    },
    role : {
        type : String
    },
    
        startDate : {
        type : Date

        },
        endDate : {
            type : Date
        }
    
}, {
    timestamps : true
})


const experienceModel = new mongoose.model("experience", experienceSchema);

module.exports = experienceModel