const educationModel = require("../models/Education")
const experienceModel = require("../models/Experience")
const messagesModel = require("../models/Messages")
const projectModel = require("../models/Projects")
const SkillsModel = require("../models/Skills")
const User = require("../models/user")




const getAllUser = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }

try {
    // const data = await messagesModel.find({}).populate("userId", "name email")
    const data = await User.find({})
    resObj.isSuccess = true
    resObj.data = data
    resObj.message = "data fetch successfully"
    return res.status(200).send(resObj)
} catch (error) {
    resObj.message = error.message
    return res.status(500).send(resObj)
}

}


const getAllSkills = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }

try {
    // const data = await messagesModel.find({}).populate("userId", "name email")
    const data = await SkillsModel.find({})
    resObj.isSuccess = true
    resObj.data = data
    resObj.message = "skills fetch successfully"
    return res.status(200).send(resObj)
} catch (error) {
    resObj.message = error.message
    return res.status(500).send(resObj)
}

}


const getAllEducation = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }

try {
    // const data = await messagesModel.find({}).populate("userId", "name email")
    const data = await educationModel.find({})
    resObj.isSuccess = true
    resObj.data = data
    resObj.message = "education fetch successfully"
    return res.status(200).send(resObj)
} catch (error) {
    resObj.message = error.message
    return res.status(500).send(resObj)
}

}



const getAllProjects = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }

try {
    // const data = await messagesModel.find({}).populate("userId", "name email")
    const data = await projectModel.find({})
    console.log(data);
    
    resObj.isSuccess = true
    resObj.data = data
    resObj.message = "project fetch successfully"
    return res.status(200).send(resObj)
} catch (error) {
    resObj.message = error.message
    console.log(error);
    
    return res.status(500).send(resObj)
}

}

const getAllExperience = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }

try {
    // const data = await messagesModel.find({}).populate("userId", "name email")
    const data = await experienceModel.find({})
    resObj.isSuccess = true
    resObj.data = data
    resObj.message = "experience fetch successfully"
    return res.status(200).send(resObj)
} catch (error) {
    resObj.message = error.message
    return res.status(500).send(resObj)
}

}





const addMessages = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }

try {
    const {email, name} = req.body;
    const data = await User.findOne({email});
    const defaultPassword = "123456"
    if(!data){
       const userdata =  await new User(
            {
                email,
                name,
                password : defaultPassword

            }

        )
        await userdata.save()
        if(userdata){

            const message = await new messagesModel({
                message : req.body.message,
                userId : userdata._id,
               
          
            })
            await message.save()
        }
        resObj.isSuccess = true
        resObj.data = userdata
        resObj.message = "done"
        return res.status(200).send(resObj)
    }
    
  
    const message = await new messagesModel({
        message : req.body.message,
        userId : data._id,
       
  
    })
    await message.save()

resObj.isSuccess = true
resObj.data = message
resObj.message = "done"
return res.status(200).send(resObj)


} catch (error) {
    console.log(error);
    
    resObj.message = error.message
    return res.status(500).send(resObj)
}

}

const getAllUserMessages = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }

try {
    const data = await messagesModel.find({}).populate("userId", "name email")
    resObj.isSuccess = true
    resObj.data = data
    resObj.message = "data fetch successfully"
    return res.status(200).send(resObj)
} catch (error) {
    resObj.message = error.message
    return res.status(500).send(resObj)
}

}




const addSkills = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }


    try {

        const {name , icon , type} = req.body
       const data = await new  SkillsModel({
        name, icon , type
       })
       await data.save()
       resObj.isSuccess = true
resObj.message = "skills added sucessfully"
resObj.data = data
res.status(200).send(resObj)

        
    } catch (error) {
        resObj.message = error.message
        return res.status(500).send(resObj)
    }
}

const addEducation = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }


    try {

        const {description , specialization , school} = req.body
       const data = await new  educationModel({
        school, specialization , description
       })
       await data.save()
       resObj.isSuccess = true
resObj.message = "education added sucessfully"
resObj.data = data
res.status(200).send(resObj)

        
    } catch (error) {
        resObj.message = error.message
        return res.status(500).send(resObj)
    }
}


const addExpericence = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }


    try {

        const {description , company , year , role , startDate , endDate} = req.body
        console.log(req.body);
        
       const data = await new  experienceModel({
        company, year , description, role , startDate,endDate
       })
       await data.save()
       resObj.isSuccess = true
resObj.message = "experience added sucessfully"
resObj.data = data
res.status(200).send(resObj)

        
    } catch (error) {
        resObj.message = error.message
        console.log(error);
        
        return res.status(500).send(resObj)
    }
}

const addProjects = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }


    try {

        const {description , name  , image, languages} = req.body
       const data = await new  projectModel({
        name, image , description, languages
       })
       await data.save()
       resObj.isSuccess = true
resObj.message = "education added sucessfully"
resObj.data = data
res.status(200).send(resObj)

        
    } catch (error) {
        resObj.message = error.message
        return res.status(500).send(resObj)
    }
}


module.exports = {
    getAllUser,
    getAllEducation,
    getAllExperience,
    getAllProjects,
    getAllSkills,
    addMessages,
    getAllUserMessages,
    addSkills,
    addEducation,
    addExpericence,
    addProjects
}