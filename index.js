import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import {router} from './routes/blood.js';

import { fileURLToPath } from 'url';
import {dirname} from 'path';
import path from 'path';

const server=express();


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database Connected");
}

const __dirname = dirname(fileURLToPath(import.meta.url));
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname,'./build')));
server.use("/blood",router);
server.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./build/index.html'));
});



server.listen(process.env.PORT,()=>{
    console.log("Server Connected")
});