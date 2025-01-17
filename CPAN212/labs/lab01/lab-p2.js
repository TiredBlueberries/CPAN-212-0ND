const http = require("http")
const fs = require("fs");
const app = http.createServer((req, res)=>{
    if(req.url === "/"){
        let webpage = fs.readFileSync("homepage.html")
        res.end(webpage)
    }
    else if(req.url === "/homepage"){
       let webpage = fs.readFileSync("homepage.html")
        res.end(webpage)
    }else if(req.url === "/about"){
        res.end("This is all about the bookstore!")
    }else if(req.url === "/contact_us"){
        res.end("PLESAE CONTACT US")
    }else if(req.url === "/login"){
        res.end("logs")
    }else if(req.url === "/fetch_data"){
        res.end("FETCH DOG")
    }else{
        res.end("Page not found")
    }
})
let PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})