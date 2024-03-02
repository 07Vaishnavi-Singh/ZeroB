import mongoose from "mongoose";

export const BookSchema = new mongoose.Schema({
    "Name":String,
    "Author": String,
    "PublishYear": Number
})

export const Books= mongoose.model("Books", BookSchema);
