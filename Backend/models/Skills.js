const mongoose = require("mongoose")


const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    logo :{
        type : String
    }
   
}, {
    timestamps : true
})


const SkillsModel = new mongoose.model("skill", SkillSchema);

module.exports = SkillsModel