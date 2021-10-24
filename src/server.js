const express = require("express");
const crypto = require("crypto");
require("dotenv").config();
const connectionToDB = require("./utils/DB");

const app = express();

// porting
const port = process.env.PORT || 4000;

connectionToDB();

app.use("/", require("./Router/index"));

app.listen(port, console.log(`Server is up on PORT: ${port}`));