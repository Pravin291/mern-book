import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import bookRouter from './routes/books.routes.js'
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.routes.js'
import path from 'path'
import cors from 'cors'

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors())

mongoose.connect(process.env.MONGO_URL,{
    dbName:'mern-book'
}).then(()=>console.log('db connected'))
  .catch((e)=> console.log(e))
const port = process.env.port;


const __dirname = path.resolve()

app.get("/", (req, res) => {
  res.send("Its work!!!");
});

app.use('/api/auth/',authRouter)
app.use("/api/user/", userRouter);
app.use('/api/book/',bookRouter)

app.use(express.static(path.join(__dirname,'/client/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})

app.listen(port, (req, res) => {
  console.log(`server is running at port ${process.env.PORT}`);
});
