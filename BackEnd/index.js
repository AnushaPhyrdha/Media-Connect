const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const app = express();
const indexRoutes = require("./routes/LoginPage");
const postRoutes = require("./routes/posts");
const jwt = require("jsonwebtoken");
const cors = require("cors");

mongoose.connect("mongodb://localhost/instaclone");
// mongodb+srv://TeamC:<password>@cluster0.basi2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// const db = "mongodb+srv://TeamC:LaundryServices@cluster0.basi2.mongodb.net/Laundry Services?retryWrites=true&w=majority"

// mongoose.connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("MongoDB Connection Successful")
// }).catch((err) => {
//     console.log('MongoDB Connection Error', err)
// })

app.use(cors());
require('./model/EndUser')
require('./model/post')

app.use("/posts", function (req, res, next) {
    try{
        const token = req.headers.authorization?.split(" ")[1];
        console.log(token);
        if (!token){
            return res.status(401).json({
                status: "failed",
                message: "Not Authenticated"
            });
        }
        const decoded = jwt.verify(token, 'Insta-Secret-123');

        if(!decoded){
            return res.status(401).json({
                status: "failed",
                message:"Invalid Token"
            })
        }
        req.user = decoded.data;
    }
    catch (e){
        return res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
      
        next();
})

app.use(bodyParser());
app.use("/", indexRoutes);
app.use("/posts", postRoutes);

app.listen("5000", () => console.log("Server listening on port 5000"));