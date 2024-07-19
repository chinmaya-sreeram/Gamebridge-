import express from "express";

import bodyParser from "body-parser";//for json stuff

import usersRoutes from "./routes/users.js";//imports users.js 

import mongoose from 'mongoose';

import {MongoClient} from 'mongodb';

let db
//let url=process.env.DB_URL;
mongoose.connect("mongodb+srv://chinmayasreeram:dhinchakpooja@users.yrk3gdl.mongodb.net/?retryWrites=true&w=majority&appName=Users").then(()=>{
  console.log("Connected to DB")
}).catch((err)=>
{
  console.log(err);
});

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users/login',usersRoutes)

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));