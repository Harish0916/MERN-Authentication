import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser());
app.use(cors({credentials:true}))

app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(PORT, ()=> console.log(`Server Started: http://localhost:${PORT}`))