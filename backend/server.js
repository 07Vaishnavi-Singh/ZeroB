import express from "express";
import {PORT,MONGODB_URL}  from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import {BookSchema, Books} from "./models/BookSchema.js";
import {router} from "./routes/BookRoutes.js"

const app = express();
app.use(express.json());
app.use(cors());
app.use("/book", router);

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


 



