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
router.delete("/deleteProject/:id",userController.deleteProject)
router.delete("/deleteSkill/:id",userController.deleteSkill)
router.delete("/deleteMessage/:id",userController.deleteMessage)
router.delete("/deleteEducation/:id",userController.deleteEducation)
router.delete("/deleteExperience/:id",userController.deleteExperience)
router.put("/editProject/:id",userController.editProjects)
router.put("/editSkill/:id",userController.editSkill)
router.put("/editEducation/:id",userController.editEducation)
router.put("/editExperience/:id",userController.editExperience)


module.exports = router 