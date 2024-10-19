const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs/dist/bcrypt")
const User = new mongoose.Schema({
   
    name : {
        type : String,
        
    },
    email : {
        type :String,
        unique : true
    },
    password : {
        type : String,
    },
    role : {
        type : String,
        default : "user"
    },
    phoneNumber :{
        type : Number,
    },
    gender : {
        type : String,
        enum : ["male" , "female" , "others"],
        
    },
  
},   { timestamps: true })


User.methods.generateToken = function(req,res,next){
    const token = jwt.sign({ _id : this._id , email : this.email } , process.env.JWT_SECRETE)
      if(token){
        return token
      }else{
        return res.status(400).send({ message : "Failed to generate token" })
      }
}


User.pre('save', async function(next){
    const user = this;
    if(!user.isModified('password')) return next()
        try {
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
            next()

        } catch (error) {
            return next(error)
            
        }
})

const userModel = new mongoose.model("user", User)


module.exports = userModel