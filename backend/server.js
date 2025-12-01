import express from 'express'
import { connectdb } from './config/db.js';
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectdb()

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})