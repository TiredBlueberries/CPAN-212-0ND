/*
1 - setup our server
2 - connect to mongoDB
3 - attach our router modules
*/
// import modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import book_router from "./routers/book_router.js"
dotenv.config();
//declaration of variables
const app = express();
const PORT = process.env.PORT || 5000;
//middleware
// routes
app.use("/book", book_router)
//start server
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
console.log("Connected to MongoDB");
app.listen(PORT, () =>
console.log(`Server running on http://localhost:${PORT}`)
);
})
.catch((error) => console.error("MongoDB connection error:", error));