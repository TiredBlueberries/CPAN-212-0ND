import express from "express"
import logger from "./middleware/logger.js";
import auth from "./middleware/auth.js"


const app = express();
const PORT = process.env.PORT || 8000;
 
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger) // appe wide

//const checkIfLoggedIn = () =>{

//}
//Callback function is a function within a function
// routes
app.get("/profile", auth, (req, res) => {
    res.send("WELCOME HOME SQUIDWARD, MERRY CHRISTMAS");
  })

  app.get("/01", (req, res) => {
    res.send("Welcome to our server 01");

  });app.get("/02", (req, res) => {
    res.send("Welcome to our server 02");
  })



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});
 