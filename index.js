import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import {router} from './routes/blood.js';

const server=express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database Connected");
}


server.use(express.json());
server.use(cors());
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/blood",router);




server.listen(process.env.PORT,()=>{
    console.log("Server Connected")
});