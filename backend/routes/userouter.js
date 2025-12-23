import express from "express"
import { Router } from "express"
import { loginUser, signupUser } from "../controllers/usercontroller.js"

 const router =express.Router()

router.post('/v1/signup',signupUser)
router.post('/v1/login',loginUser)


export default router