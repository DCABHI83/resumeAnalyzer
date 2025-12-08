import express from "express"
import { Router } from "express"
import { signupUser } from "../controllers/usercontroller.js"

 const router =express.Router()

router.post('/v1/signup',signupUser)


export default router