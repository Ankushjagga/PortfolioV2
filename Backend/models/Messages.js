const mongoose = require("mongoose")


const messageSchema = new mongoose.Schema({
    message: {
        type: String,
    },
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
}, {
    timestamps : true
})


const messagesModel = new mongoose.model("message", messageSchema);

module.exports = messagesModel