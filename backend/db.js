require("dotenv").config();
const mongoose = require("mongoose");

mongoose
    .connect(process.env.SECRETKEY).then((response) => {
    console.log("Connected to database")
})
    .catch((error)=>{
    console.log(error)
})