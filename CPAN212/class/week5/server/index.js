import express from "express";
import cors from "cors";
import multer from "multer";

//grab info, parse file, save file in a destination + set filename, all good
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now()
    cb(null, uniquePrefix + file.fieldname)
  }
})

const upload = multer({ storage: storage })


const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true })); // Accept plain HTML forms
app.use(express.json()); // Accept JSON data

// Home route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Mock user data with exposed password (for learning purposes)
app.get("/data", (req, res) => {
  res.json({
    name: "Johnny",
    username: "Penguin",
    password: "password123" // ✅ Exposing password for learning
  });
});

// Handle login
app.post("/login", (req, res) => {
  console.log(req.body); // Log received data
  res.json({ message: "Login successful!", receivedData: req.body });
});

app.post("/upload", upload.single("file"), (req, res) =>{
  console.log(req.body)
  console.log(req.file)
  res.json("I got your file");

})

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

/*
React ->
 Server ->
  /image > 
  parse for req.body with multer >
   save the file >
    we got it
*/