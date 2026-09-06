const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = new mongoose.Schema({
   
    name : {
        type : String,
        trim : true
    },
    email : {
        type :String,
        unique : true,
        lowercase : true,
        trim : true
    },
    password : {
        type : String,
        // Never comes back from a query unless explicitly asked for, so hashes
        // can't leak through endpoints like getAllUser.
        select : false
    },
    role : {
        type : String,
        enum : ["user" , "admin"],
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


User.methods.generateToken = function(){
    const secret = process.env.JWT_SECRET || process.env.JWT_SECRETE;
    if(!secret){
        throw new Error("JWT secret is not configured")
    }
    return jwt.sign(
        { _id : this._id , email : this.email , role : this.role },
        secret,
        { expiresIn : process.env.JWT_EXPIRES_IN || "1d" }
    )
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
