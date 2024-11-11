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
    const count = await SkillsModel.countDocuments({});
    resObj.isSuccess = true
    resObj.data = data
    resObj.count = count
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
    const data = await educationModel.find({
        
    }).sort({"createdAt" : -1})
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
    const count = await projectModel.countDocuments({});
    console.log(data);
    
    resObj.isSuccess = true
    resObj.data = data
    resObj.count = count
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
        resObj.message = "message send sucessfully"
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
    const count = await messagesModel.countDocuments({});
    resObj.isSuccess = true
    resObj.data = data
    resObj.count = count
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

        const {description , specialization ,image ,  school , startDate , endDate} = req.body
       const data = await new  educationModel({
        school, specialization , description , startDate , endDate , image
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
resObj.message = "project added sucessfully"
resObj.data = data
res.status(200).send(resObj)

        
    } catch (error) {
        resObj.message = error.message
        return res.status(500).send(resObj)
    }
}

const deleteProject = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }

try {
    const id =req.params.id ; 
    const data = await projectModel.findByIdAndDelete({_id:id})
    
    resObj.isSuccess = true
    resObj.data = data
    resObj.message = "project deleted successfully"
    return res.status(200).send(resObj)
} catch (error) {
    resObj.message = error.message
    console.log(error);
    
    return res.status(500).send(resObj)
}

}



const deleteSkill = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }

try {
    const id =req.params.id ; 
    const data = await SkillsModel.findByIdAndDelete({_id :id})
    
    resObj.isSuccess = true
    resObj.data = data
    resObj.message = "skill deleted successfully"
    return res.status(200).send(resObj)
} catch (error) {
    resObj.message = error.message
    console.log(error);
    
    return res.status(500).send(resObj)
}

}


const deleteEducation = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }

try {
    const id =req.params.id ; 
    const data = await educationModel.findByIdAndDelete({_id :id})
    
    resObj.isSuccess = true
    resObj.data = data
    resObj.message = "education deleted successfully"
    return res.status(200).send(resObj)
} catch (error) {
    resObj.message = error.message
    console.log(error);
    
    return res.status(500).send(resObj)
}

}

const deleteMessage = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }

try {
    const id =req.params.id ; 
    const data = await messagesModel.findByIdAndDelete({_id: id})
    
    resObj.isSuccess = true
    resObj.data = data
    resObj.message = "MESSAGE deleted successfully"
    return res.status(200).send(resObj)
} catch (error) {
    resObj.message = error.message
    console.log(error);
    
    return res.status(500).send(resObj)
}

}

const deleteExperience = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }

try {
    const id =req.params.id ; 
    const data = await experienceModel.findByIdAndDelete({_id:id})
    
    resObj.isSuccess = true
    resObj.data = data
    resObj.message = "experience deleted successfully"
    return res.status(200).send(resObj)
} catch (error) {
    resObj.message = error.message
    console.log(error);
    
    return res.status(500).send(resObj)
}

}



const editProjects = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }


    try {

        const {description , name  , image, languages} = req.body
       const data = await   projectModel.findByIdAndUpdate( req.params.id ,  {
        $set: { name, image , description, languages}
       } ,
       { new: true } )
       await data.save()
       resObj.isSuccess = true
resObj.message = "project edited sucessfully"
resObj.data = data
res.status(200).send(resObj)

        
    } catch (error) {
        resObj.message = error.message
        return res.status(500).send(resObj)
    }
}

const editSkill = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }


    try {

        const {  name  , logo} = req.body
       const data = await   SkillsModel.findByIdAndUpdate( req.params.id ,  {
        $set: { name, logo}
       } ,
       { new: true } )
       await data.save()
       resObj.isSuccess = true
resObj.message = "skill edited sucessfully"
resObj.data = data
res.status(200).send(resObj)

        
    } catch (error) {
        resObj.message = error.message
        return res.status(500).send(resObj)
    }
}




const editEducation = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }


    try {

        const {description , specialization , school , startDate , endDate} = req.body
     
       const data = await   educationModel.findByIdAndUpdate( req.params.id ,  {
        $set: {  school, specialization , description , startDate , endDate}
       } ,
       { new: true } )
       await data.save()
       resObj.isSuccess = true
resObj.message = "education edited sucessfully"
resObj.data = data
res.status(200).send(resObj)

        
    } catch (error) {
        resObj.message = error.message
        return res.status(500).send(resObj)
    }
}



const editExperience = async (req,res)=>{
    let resObj = {
        isSuccess : false,
        data : null,
        message : ""
    }


    try {

        const {company , year , description , role , startDate , endDate , image} = req.body
     
       const data = await   experienceModel.findByIdAndUpdate( req.params.id ,  {
        $set: {  company, year , description , role ,startDate , endDate , image}
       } ,
       { new: true } )
       await data.save()
       resObj.isSuccess = true
resObj.message = "expericence edited sucessfully"
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
    addProjects,
    deleteProject,
    deleteSkill,
    deleteMessage,
    editProjects,
    editSkill,
    deleteEducation,
    editEducation,
    deleteExperience,
    editExperience
    
}