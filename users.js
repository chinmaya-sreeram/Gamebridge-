//const express=require('express');
import express from 'express';

import mongoose from 'mongoose';

import multer from 'multer';

import path from 'path';

const router=express.Router();

const userSchema = new mongoose.Schema(
    {
    "name": String,
    "age": Number,
    "college":String
  });
  
const user = mongoose.model('user', userSchema);

//GET request of all raw data
router.get('/', async (req,res)=>
{
    try {
        let detail = await user.find();
        // const db=user.db("test");
        // const collection=db.collection("users");
        // const prods=await collection.find({}).toArray();
        //res.send('entering get req');
        res.status(200).send(detail);
      } catch (error) {
        res.status(400).send(error);
      }
});

//POST request of raw data
router.post('/',async (req,res)=>
{
    try {
        const { name,age,college } = req.body;
        const newSample = new user({ name,age,college });
        await newSample.save();
        res.status(201).send(newSample);
      } catch (error) {
        res.send(error);
      }
      console.log(`${user.name} added to database`);
}
);

//GET request by id of raw data
router.get('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const userName = await user.findOne({name:name});
    if (user) {
      res.status(200).json(userName);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE request by ID of raw data
router.delete('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const result = await user.findOneAndDelete({name:name});
    if (result) {
      res.status(200).json({ message: `User ${user.name} deleted successfully `});
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

//PATCH request by id
//in patch request just add the parts you want to change
// router.patch('/:id',(req,res)=>{
//     const { id }=req.params;
//     const {name,age,college}=req.body;

//     const user=users.find((user)=>user.id=id);

//     if(name)     user.name=name;
//     if(age)      user.age=age;
//     if(college)  user.college=college;
//     //checks if the userID we input matches and sets users to that
//     res.send(`user with ${id} has been updated`);
// });

export default router;



