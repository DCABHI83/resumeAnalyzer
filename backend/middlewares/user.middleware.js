import jwt from 'jsonwebtoken'
import User from '../models/usermodel.js'


export const verifyToken = async(req,res,next)=>{
    try {
        const token = req.cookies.accessToken
        console.log(token)
        if(!token){
            return res.status(401).json({message:"token not provided"})
        }
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken.id)
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        req.user = user
        next()
    } catch (error) {
        return res.status(500).json({message:"Something went wrong",error:error.message})
    }
}