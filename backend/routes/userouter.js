import express from "express"
import { Router } from "express"
import { loginUser, logoutUser, signupUser } from "../controllers/usercontroller.js"
import { verifyToken } from "../middlewares/user.middleware.js"

 const router =express.Router()

router.post('/v1/signup',signupUser)
router.post('/v1/login',loginUser)
router.post('/logout',verifyToken,logoutUser)

export default router