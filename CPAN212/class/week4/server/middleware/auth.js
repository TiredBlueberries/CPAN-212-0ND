const auth = (req, res, next) => {
   if(req.query.username === "Johnny") {
    next();
} else {
    res.send ("ACCESS NOT ALLOWED")
  //  res.redirect("http://localhoest:8000/")
 // res.json({message: "You are not the right user, LOGIN!!!!"})
}
};
export default auth;