const express = require("express")
const rateLimit = require("express-rate-limit")
const router =  express.Router();
const  authController = require("../controllers/authController");
const { authenticate } = require("../middleware/auth");

// Credential endpoints are the ones worth brute-forcing, so they get their own
// (deliberately tight) budget.
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { isSuccess: false, data: null, message: "Too many attempts, please try again later" },
})

router.post("/register",authLimiter,authController.register)
router.post("/login",authLimiter,authController.login)
router.get("/me",authenticate,authController.me)


module.exports = router
