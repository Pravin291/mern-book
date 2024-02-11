import mongoose from "mongoose";

export const bookSchema = new mongoose.Schema({
    bookTitle:{
        type:String,
        required:true,
    },
    authorName:{
        type:String,
        required:true,
    },
    bookURL:{
        type:String,
        required:true,
    },
    imageURL:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    bookDescription:{
        type:String,
        required:true,
    },
    bookPDFURL:{
        type:String,
        required:true,
    },
    bookPrice:{
        type:String,
        required:true
    },

},{timeStamp:true})

const Book = mongoose.model('Book',bookSchema)

export default Book;