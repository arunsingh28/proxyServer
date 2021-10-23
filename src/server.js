const express = require("express");
const crypto = require("crypto");

const app = express();

// porting
const port = process.env.PORT || 4000;

const knowDomain = (req) => {
    const protocall = req.protocol;
    const host = req.hostname;
    return { protocall, host };
};

app.use("/dns", async(req, res) => {
    const data = req.query;
    const hash = crypto.randomBytes(16).toString("hex");
    const domain = knowDomain(req);
    const proxyLink = `${domain.protocall}://${domain.host}/?f=${hash}/${data.f}`;
    return res.status(200).json({ key: hash, url: proxyLink });
});

app.use("/", require("./Router/index"));

app.listen(port, console.log(`Server is up on PORT: ${port}`));