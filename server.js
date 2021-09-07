const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://MERN-STACK:4g8fJ790cyf5CsBV@cluster0.4s7rg.mongodb.net/MERN-STACK")

app.use("/", require("./routes/noteRoute.js"));

app.listen(3001, function() {
    console.log("express server is running port on 3001")
})