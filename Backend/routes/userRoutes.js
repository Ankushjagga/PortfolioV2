const express = require("express")
const router =  express.Router();
const  userController = require("../controllers/userController");
const { authenticate, requireAdmin } = require("../middleware/auth");

// Everything an admin touches goes through both guards.
const adminOnly = [authenticate, requireAdmin];

/* ---------- public: the data the portfolio renders for visitors ---------- */
router.get("/getAllEducation",userController.getAllEducation)
router.get("/getAllExperience",userController.getAllExperience)
router.get("/getAllProjects",userController.getAllProjects)
router.get("/getAllSkills",userController.getAllSkills)
router.post("/addMessage",userController.addMessages)

/* ---------- admin only ---------- */
router.get("/getAllUser",adminOnly,userController.getAllUser)
router.get("/getAllMessages",adminOnly,userController.getAllUserMessages)

router.post("/addSkills",adminOnly,userController.addSkills)
router.post("/addEducation",adminOnly,userController.addEducation)
router.post("/addExpericence",adminOnly,userController.addExpericence)
router.post("/addProjects",adminOnly,userController.addProjects)

router.delete("/deleteProject/:id",adminOnly,userController.deleteProject)
router.delete("/deleteSkill/:id",adminOnly,userController.deleteSkill)
router.delete("/deleteMessage/:id",adminOnly,userController.deleteMessage)
router.delete("/deleteEducation/:id",adminOnly,userController.deleteEducation)
router.delete("/deleteExperience/:id",adminOnly,userController.deleteExperience)

router.put("/editProject/:id",adminOnly,userController.editProjects)
router.put("/editSkill/:id",adminOnly,userController.editSkill)
router.put("/editEducation/:id",adminOnly,userController.editEducation)
router.put("/editExperience/:id",adminOnly,userController.editExperience)


module.exports = router
