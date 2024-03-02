import express from "express";
import {PORT,MONGODB_URL}  from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import {BookSchema, Books} from "./models/BookSchema.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/books', async(req,res)=>{
  const books = await Books.find({});
  res.status(200).json(books);
}) 

app.get('/bookById/:id', async(req,res)=>{
   var id = req.params.id;
   const book = await Books.findById(id);
   res.status(200).json(book);
})

app.post('/postBook', async(req,res)=>{
  const newBook = {
    "Name": req.body.Name,
    "Author": req.body.Author,
    "PublishYear": req.body.PublishYear,
  }
const book = await Books.create(newBook);
res.status(200).json(book);
console.log("Book Created");
})

app.put('/updateBook/:id', async(req,res)=>{
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

app.delete("/deleteBook/:id", async(req,res)=>{
  const id = req.params.id;
  await Books.findByIdAndDelete(id);
  res.status(200);
  console.log("Book Deleted By Id");
})


mongoose.connect(MONGODB_URL)
.then(
  app.listen(PORT, ()=>{
    console.log("Database Connected");
    console.log(`Server Started running on the port : ${PORT}`);
    })
)
.catch((error)=>{
  console.log(error);
})


 



