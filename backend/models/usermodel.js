import mongoose from 'mongoose'

const userSchema  = mongoose.model({
    name:{
        type:String,
        require:true
    },
    email :{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    }
})