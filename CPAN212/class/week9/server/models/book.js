// a minimum skeleton for our model file
import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
title: {
type: String,
},
author: {
type: String,
},
publisher: {
type: String,
},
pages: {
type: Number,
},
release_date: {
type: String,
},
ISBN: {
type: String,
},
});
const Book = mongoose.model("books", bookSchema);
export default Book;