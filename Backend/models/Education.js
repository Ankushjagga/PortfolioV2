const mongoose = require("mongoose")


const educationSchema = new mongoose.Schema({
    school: {
        type: String,
    },
    specialization :{
        type:String
    },
    description :{
        type:String
    }
}, {
    timestamps : true
})


const educationModel = new mongoose.model("education", educationSchema);

module.exports = educationModel