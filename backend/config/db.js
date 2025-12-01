import mongoose from "mongoose";


export const  connectdb = async(req,res)=>{
  try {
    const dbConnect  = await mongoose.connect(process.env.MONGODB_URI)
    console.log("mongodb connected successfully")
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}