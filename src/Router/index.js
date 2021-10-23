const express = require("express");
const app = express.Router();
const { fetch } = require("../controllers/index");

// call to other api
app.get("/html", fetch);

module.exports = app;