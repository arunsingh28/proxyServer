const needle = require("needle");
const _link = require("../models/link");
const crypto = require("crypto");

const htmlCode = async(req, res) => {
    const site = req.query;
    needle.get(`https://${site.s}`, (err, response) => {
        if (!err && response.statusCode === 200) {
            return res.status(200).json({ body: response.body });
        } else {
            console.log("not working");
        }
    });
};

const proxyLink = async(req, res) => {
    const knowDomain = require("../utils/URL");
    const data = req.query;
    console.log(data);
    // creating id
    const hash = crypto.randomBytes(10).toString("hex");
    const domain = knowDomain(req);
    const proxyLink = `${domain.protocall}://${domain.host}/?f=${hash}/${data.f}`;
    if (!data.f) {
        return res.status(201).json({ message: "Please provide valid value" });
    }

    try {
        const d = await _link({
            link: proxyLink,
            value: data,
        });
        d.save().then(console.log("data saved", d));
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    htmlCode,
    proxyLink,
};