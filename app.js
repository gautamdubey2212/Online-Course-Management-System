const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const path = require("path");

const { connDB } = require("./db");

const userRouter = require("./Router/userRouter");
const courseRouter = require("./Router/courseRouter");

const app = express();


connDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
    session({
        secret: "coursemanagement",
        resave: false,
        saveUninitialized: true
    })
);


app.use(methodOverride("_method"));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use("/", userRouter);
app.use("/", courseRouter);

app.listen(4000,()=>{
    console.log("server is running on Port 4000");
    
});
