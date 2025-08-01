import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json())
app.use(cookieParser());
app.use(cors({credentials:true}))

app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(PORT, ()=> console.log(`Server Started: http://localhost:${PORT}`))