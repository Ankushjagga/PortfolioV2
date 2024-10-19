const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req,res)=>{

let respObj = {
    isSuccess : false,
    data : null,
    message : ""
}
try {
    const {name , email ,password , phoneNumber , gender} =req.body
    console.log("gender", gender);
    if(!name || !email || !password || !phoneNumber || !gender){
        respObj.message ="Enter Fields Properly"
        return res.status(400).send(respObj)
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const addUser = new User({name , email , password : hashedPassword , phoneNumber ,gender
    }
    )
    await addUser.save()
    respObj.isSuccess = true;
    respObj.message = "Register Sucessfully"
    
  return   res.status(200).send(respObj) 
} catch (error) {
    return res.status(500).send(error)
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
        const findUser = await User.findOne({email : email});
        if(!findUser){
            respObj.message = "Email not Registered"
           return  res.status(400).send(respObj)
        }
       console.log(findUser);
       
        const comparePassword = await bcrypt.compare(password, findUser.password);
        if(comparePassword){
            const token = findUser.generateToken();
            console.log(token);
            
            res.cookie("token", token,{
                httpOnly:true,
                
            })
            respObj.isSuccess = true;
            respObj.message = "login Sucessfully"
            
            return   res.status(200).send(respObj) 
        }
    } catch (error) {
        console.log(error);
         respObj.message =error.message
        return res.status(500).send(respObj)
    }
    
    
    }

module.exports = {
    register,
    login
}