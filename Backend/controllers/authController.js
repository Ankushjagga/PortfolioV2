const User = require("../models/user");
const bcrypt = require("bcryptjs");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The only user fields that are ever safe to hand back to a client.
const publicUser = (user) => ({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    phoneNumber: user.phoneNumber,
    gender: user.gender,
});

const register = async (req,res)=>{

let respObj = {
    isSuccess : false,
    data : null,
    message : ""
}
try {
    const {name , email ,password , phoneNumber , gender} =req.body
    if(!name || !email || !password || !phoneNumber || !gender){
        respObj.message ="Enter Fields Properly"
        return res.status(400).send(respObj)
    }
    if(!EMAIL_REGEX.test(email)){
        respObj.message = "Enter a valid email"
        return res.status(400).send(respObj)
    }
    if(String(password).length < 8){
        respObj.message = "Password must be at least 8 characters"
        return res.status(400).send(respObj)
    }

    const existing = await User.findOne({ email : String(email).toLowerCase() })
    if(existing){
        respObj.message = "Email already registered"
        return res.status(409).send(respObj)
    }

    // `role` is deliberately not read from the body — nobody signs themselves up
    // as an admin.
    const addUser = new User({name , email , password , phoneNumber ,gender})
    await addUser.save()
    respObj.isSuccess = true;
    respObj.data = publicUser(addUser)
    respObj.message = "Register Sucessfully"
    
  return   res.status(200).send(respObj) 
} catch (error) {
    respObj.message = error.message
    return res.status(500).send(respObj)
}


}

const login = async (req,res)=>{

    let respObj = {
        isSuccess : false,
        data : null,
        message : ""
    }
    try {
        const {password , email } =req.body
        if(!password || !email){
            respObj.message ="Enter Fields Properly"
            return res.status(400).send(respObj)
        }
        // `password` is select:false on the schema, so ask for it explicitly.
        const findUser = await User.findOne({email : String(email).toLowerCase()}).select("+password");

        // Same reply whether the email is unknown or the password is wrong, so
        // the endpoint can't be used to enumerate registered emails.
        const invalid = () => {
            respObj.message = "Invalid Crediential"
            return res.status(401).send(respObj)
        }

        if(!findUser || !findUser.password){
            return invalid()
        }
        const comparePassword = await bcrypt.compare(password, findUser.password);
        if(!comparePassword){
            return invalid()
        }
        if(findUser.role !== "admin"){
            respObj.message = "Only for admin access 😁"
            return res.status(403).send(respObj)
        }

        const token = findUser.generateToken();

        respObj.isSuccess = true;
        respObj.Token = token
        respObj.data = publicUser(findUser)
        respObj.message = "login Sucessfully"

        return   res.status(200).send(respObj)
    } catch (error) {
        console.log(error);
         respObj.message =error.message
        return res.status(500).send(respObj)
    }
    
    
    }

/** Lets the client confirm a stored token is still valid (and still an admin). */
const me = async (req,res)=>{
    return res.status(200).send({
        isSuccess : true,
        data : publicUser(req.user),
        message : "user fetched successfully"
    })
}


module.exports = {
    register,
    login,
    me
}
