import express from "express";
import Book from "../models/book_model.js";
import { getAllBooks } from "../controllers/book_controller.js";
const router = express.Router();
// R - fetch all
router.get("/fetch_books", (req, res) => {
Book.find()
.then((results) => {
res.json(results);
})
.catch((error) => {
res.status(500).json({ message: "Error fetching books", error });
});
});
// moving it to the controller "cleaning the files and organizing the work":
router.get("/fetch_books_controller", getAllBooks);
// R - fetch with filter
router.get("/fetch_books_filtered", (req, res) => {
const filters = {};
// filtering check - just a quick example
if (req.query.title) {
filters.title = { $regex: req.query.title, $options: "i" };
}
Book.find(filters)
.then((results) => {
res.json(results);
})
.catch((error) => {
res.status(500).json({ message: "Error fetching books", error });
});
});
// R - fetch one
router.get("/fetch_books/:id", (req, res) => {
Book.findById(req.params.id)
.then((results) => {
res.json(results);})
.catch((error) => {
res.status(500).json({ message: "Error fetching books", error });
});
});
// C - create new entry
router.post("/add_book", (req, res) => {
// 1 - get information from the req.body
// 2 - create a new object instance of Book with the req.body information
// 3 - save, using the ".save()" function from mongoose
// step 1
const { title, author, publishers, pages, release_date, ISBN } = req.body;
// step 2 - similar to things you did in Java and Python
const newBook = new Book({
title,
author,
publisher,
pages,
ISBN,
release_date,
});
// step 3
newBook
.save()
.then((result) => {
res
.status(201)
.json({ message: "Book added successfully", book: result });
})
.catch((error) => {
res.status(500).json({ message: "Error adding book", error });
});
});
// U - Update existing entry
router.put("/update_books/:id", (req, res) => {
// 1 - Gather the information
const { title, author, publishers, pages, release_date, ISBN } = req.body;
// 2 - Find and update the book
Book.findByIdAndUpdate(req.params.id,
    { title, author, publishers, pages, release_date, ISBN },
    { new: true, runValidators: true }
    )
    .then((updatedBook) => {
    if (!updatedBook) return res.status(404).json({ message: "Book not found"
    });
    res.json({ message: "Book updated successfully", book: updatedBook });
    })
    .catch((error) => res.status(500).json({ message: "Error updating book",
    error }));
    });
    // D - Delete entry
    router.delete("/delete_books", (req, res) => {
    // 1 - find book
    // 2 - delete
    Book.findByIdAndDelete(req.params.id);
    });
    export default router;