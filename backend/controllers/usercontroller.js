import mongoose from "mongoose";
import User from "../models/usermodel.js";
import bcrypt from "bcrypt"


export const signupUser = async(req,res)=>{
  const {name,email,password,confirmpassword} = req.body
  if(!name || !email || !password || !confirmpassword ){
    return res.status(401).json({message:"All Fields are required"})
  }
  if(password !== confirmpassword){
    return res.status(404).json({message:"Password didnt match"})
  }
  const user = await User.findOne({email})
  if(user.email){
    return res.status(404).json({message:"Email already exist"})
  }
  const hashedPassword =await bcrypt.hash(password,10)

  const createdUser = await User.create({name,email,password:hashedPassword}) 
return res.status(201).json({message:"User created successfully"})

}

