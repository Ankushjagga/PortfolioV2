const express = require("express")
const router =  express.Router();
const  userController = require("../controllers/userController");


router.get("/getAllUser",userController.getAllUser)
router.get("/getAllEducation",userController.getAllEducation)
router.get("/getAllExperience",userController.getAllExperience)
router.get("/getAllProjects",userController.getAllProjects)
router.get("/getAllSkills",userController.getAllSkills)
router.post("/addMessage",userController.addMessages)
router.get("/getAllMessages",userController.getAllUserMessages)
router.post("/addSkills",userController.addSkills)
router.post("/addEducation",userController.addEducation)
router.post("/addExpericence",userController.addExpericence)
router.post("/addProjects",userController.addProjects)


module.exports = router 