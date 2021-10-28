const express = require("express");
const crypto = require("crypto");
require("dotenv").config();
const connectionToDB = require("./utils/DB");

// init express
const app = express();

// dyanmic porting
const port = process.env.PORT || 4000;

// routing 
app.use("/", require("./Router/index"));


// server start
app.listen(port, console.log(`Server is up on PORT: ${port}`));
