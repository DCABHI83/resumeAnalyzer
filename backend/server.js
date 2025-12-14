import express from 'express'
import { connectdb } from './config/db.js';
import dotenv from 'dotenv'
import router from './routes/userouter.js';
import cors from 'cors'
dotenv.config()
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/api',router)
connectdb()

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})