import mongoose from "mongoose";
import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(401).json({ message: "All Fields are required" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(404).json({ message: "Email already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    //  console.log(createdUser)
    return res
      .status(201)
      .json({ message: "User created successfully" }, { createdUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};

//login user

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found please signUp first" });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    const accesstoken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "7d" }
    );
    const refresh_Token = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "30d" }
    );
    user.refreshToken = refresh_Token;
    await user.save({ validateBeforeSave: false });
    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV,
      sameSite : "strict",
       maxAge: 7 * 24 * 60 * 60 * 1000
    };
    res
      .status(200)
      .cookie("accessToken", accesstoken, options)
      .cookie("refresh_token", refresh_Token, options)
      .json({
        message: `welcome ${user.name}`,
        token: accesstoken,
        refresh_Token,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Inernal servor error", error: error.message });
  }
};

//logout user

export const logoutUser = async(req,res)=>{
  await User.findByIdAndUpdate(
    req.user._id,
  {
    $set :{
      refreshToken : undefined,
    },
    
  },
  {
    new : true
  }
  )
 const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV,
      sameSite : "strict",
       maxAge: 7 * 24 * 60 * 60 * 1000
    };

    return res.status(200).clearCookie('accessToken',options).clearCookie("refreshToken",options).json({message:"user logged out successfully"})
  
  
}
