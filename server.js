const express = require("express");
const app = express();

// porting
const port = process.env.PORT || 4000;

app.listen(port, console.log(`Server is up on PORT: ${port}`));