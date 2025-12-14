import mongoose from "mongoose";
import User from "../models/usermodel.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const signupUser = async(req,res)=>{
 try {
   const {name,email,password} = req.body
   if(!name || !email || !password){
     return res.status(401).json({message:"All Fields are required"})
   }
   const user = await User.findOne({email})
   if(user){
     return res.status(404).json({message:"Email already exist"})
   }
   const hashedPassword =await bcrypt.hash(password,10)
 
   const createdUser = await User.create({name,email,password:hashedPassword}) 
   console.log(createdUser)
 return res.status(201).json({message:"User created successfully"},{createdUser})
 } catch (error) {
  return res.status(500).json({message:"internal server error",error:error.message})
 }


}


//login user

const loginUser = async(req,res)=>{
 try {
   const {email,password} = req.body
   if(!email || !password){
     return res.status(400).json({message:"All fields are required"})
   }
   const user = await User.findone({email})
   if(!user){
     return res.status(404).json({message:"User not found please signUp first"})
   }
  const comparePassword = await bcrypt.compare(password,user.password)
 if(comparePassword){
     return res.status(200).json({message:`welcome ${user.name}`})
 }
 const accesstoken = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:"7d"})
 } catch (error) {
  return res.status(500).json({message:"Inernal servor error",error:error.message})
 }

}
