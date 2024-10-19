const express = require("express")
const router =  express.Router();
const  userController = require("../controllers/userController");


router.get("/getAllUser",userController.getAllUser)
router.post("/addMessage",userController.addMessages)
router.get("/getAllMessages",userController.getAllUserMessages)
router.post("/addSkills",userController.addSkills)
router.post("/addSkills",userController.addEducation)
router.post("/addSkills",userController.addExpericence)
router.post("/addSkills",userController.addProjects)


module.exports = router 