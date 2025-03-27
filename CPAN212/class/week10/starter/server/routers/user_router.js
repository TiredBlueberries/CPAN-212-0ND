import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/register", (req, res) =>{

})

router.post("/login", (req, res)=>{
    const {email, password} = req.body;

    User.findOne({email: email}) //result: {} or {user_acc}
    .then((user_account) => {
        if(!user_account){
           return res.json({message: "User account not found"})
        }

        //compare passwords

        bcrypt.compare(password, user_account.password)
        .then((isMatched) =>{
            if(!isMatched){
                return res.status(400).json({ message: "Invalid password" });
            }
            return res.json({message: "Login successful"})
        })
         //if it runs successfully -> T/F
        .catch((err) =>{
            console.log(err);
            return res.status(500).json({message: "could not complete request"})
        })
    })
    .catch((err) =>{
    console.log(err);
    return res.status(500).json({message: "could not complete request"})
})
})


// read, these will be assignments
router.get("fetch-all", (req, res)=> {
    //find
   // let filters = {}
   // if (req.query.title){
     //   filters.title = req.query.title
    //}
   // User.find(filters, {password: 0})
    User.find().then((result)=>(console.log(result)))
    res.end();

})

router.get("/itm/:id", (req, res)=> {
    //find
   // let filters = {}
   // if (req.query.title){
     //   filters.title = req.query.title
    //}
   // User.find(filters, {password: 0})
   User.find();
    User.findById(req.params.id).then((result)=>{console.log(result)})
    res.end();
    User.findByIdUpdate({id_value}, {updated key:values})
    User.findByIdDelete({id_value})
    

})











 /* router.post("/register", (req, res)=>{
    //step 1, parse incoming information
    const {email, password} = req.body;








    // hash the information
    bcrypt.hash(password, 10)
    .then((hashedPassword)=>{
        let newUser = new User({
            email,
             password: hashedPassword,
        });

        newUser.save()
        .then(()=>{
            res.json({message: "ACcount registered"})
        })
        .catch((err)=>{
        console.log(err);
        return res.json({message: "Email already taken"})
    })
    })
    .catch((err)=>{
        console.log(err);
       return res.json({message: "Could not complete transaction"})
    })
    // run command: npm i bcryptjs
})
*/
export default router;

