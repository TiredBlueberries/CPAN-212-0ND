import express from "express"
import dotenv from "dotenv"
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res)=>{
    res.send("Welcome to the Server! -get")
})

app.post("/", (req, res)=>{
    res.send("Welcome to the Server! -post")
})

app.put("/", (req, res)=>{
    res.send("Welcome to the Server! -put")
})

app.delete("/", (req, res)=>{
    res.send("Welcome to the Server! -delete")
})

dotenv.config();
app.listen (PORT, ()=>{
    console.log(`http://localbost:${PORT}`)
})

//https://www.youtube.com/watch?v=1BVJzaXv3rk
// DOMAIN /endpoint
//1h:3000/watch          ?       v=1BVJzaXv3rk

app.get("/watch", (req, res)=>{
    console.log("URL call:")
    console.log(req.url)
    console.log("Method call:")
    console.log(req.method)
    console.log("Headers call:")
    console.log(req.headers)
    console.log("Query call:")
    console.log(req.query)
    console.log("Param call:")
    console.log(req.params)
    console.log("Body call:")
    console.log(req.body)
    res.send("Welcome to the item list")
})

// https://www.ebay.ca/itm/32512724657
// DOMAIN /itm / 325127246257

app.get("/itm", (req, res) => {

})