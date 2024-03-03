import express from "express";
import Router from "express" ;
import {BookSchema,Books} from "../models/BookSchema.js";

export const router = express.Router();


router.get('/books', async(req,res)=>{
    const books = await Books.find({});
    res.status(200).json(books);
  }) 

  router.get('/bookById/:id', async(req,res)=>{
     var id = req.params.id;
     const book = await Books.findById(id);
     res.status(200).json(book);
  })
  
  router.post('/postBook', async(req,res)=>{
    const newBook = {
      "Name": req.body.Name,
      "Author": req.body.Author,
      "PublishYear": req.body.PublishYear,
    }
  const book = await Books.create(newBook);
  res.status(200).json(book);
  console.log("Book Created");
  })
  
  router.put('/updateBook/:id', async(req,res)=>{
  const id = req.params.id;
  const newBook ={
    "Name": req.body.Name,
    "Author": req.body.Author,
    "PublishYear": req.body.PublishYear,
  }
  const book = await Books.findByIdAndUpdate(id,newBook);
  res.status(200).json(book);
  console.log(book);
  })
  
  router.delete("/deleteBook/:id", async(req,res)=>{
    const id = req.params.id;
    await Books.findByIdAndDelete(id);
    res.status(200);
    console.log("Book Deleted By Id");
  })
  