const express = require("express");
const app = express.Router();
const { htmlCode, proxyLink } = require("../controllers/index");

// site scraping

/** 
 * @use API
 * pass query as s = "site_name"
 * example
 * ?s=site_name || ?s=arunsingh28.me

 */
app.get("/html", htmlCode);

app.get("/dns", proxyLink);

module.exports = app;