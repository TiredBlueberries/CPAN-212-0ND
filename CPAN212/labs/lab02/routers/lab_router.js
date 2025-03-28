import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
res.send ("Welcome to the lab router")
})


// /name -> lab/name
router.get("/name", (req, res)=>{
    res.send ("Johnny Tran")
    })

    router.get("/greeting", (req, res)=>{
        res.send ("Hello, I am Johnny Tran and my Student Number is: n01595596")
        })
    
        router.get("/add/:x/:y", (req, res) =>{
            let x = parseFloat(req.params.x);
            let y = parseFloat(req.params.y);

            res.send (`${x + y}`)
        })

        router.get("/calculate/:a/:b/:operation", (req, res) => {
            let a = parseFloat(req.params.a); 
            let b = parseFloat(req.params.b); 
            let operation = req.params.operation;
        
            switch (operation) {
                case "+":
                    res.send(`${a + b}`);
                    break;
        
                case "-":
                    res.send(`${a - b}`);
                    break;
        
                case "*":
                    res.send(`${a * b}`);
                    break;
        
                case "/":
                        res.send(`${a / b}`);
                    break;
        
                default:
                    res.send("WRONG OPERATION");
            }
        });
        
        export default router;