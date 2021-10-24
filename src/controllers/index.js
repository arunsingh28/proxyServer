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
    const value = req.query.f;
    console.log(value);
    // creating id
    const hash = crypto.randomBytes(10).toString("hex");
    const domain = knowDomain(req);
    const link = `${domain.protocall}://${
    domain.host
  }/?f=${hash}/${value.substring(7, 3)}`;
    if (value.f == "") {
        return res.status(201).json({ message: "Please provide valid value" });
    }
    try {
        const store = await _link({
            link,
            value,
        });
        store.save().then(() => {
            return res.status(200).json({ store });
        });
    } catch (error) {
        console.log(error);
    }
};

const proxyRedirect = async(req, res) => {
    const link = req.query.q;
    const getValue = await _link.findOne({ link });
    if (!getValue) {
        return res.status(201).json({ message: "invalid link or link change" });
    }
    return res.redirect(`${getValue.value}`);
};

const allLinks = async(req, res) => {
    const allLink = await _link.find().select("-createAt -_id -__v");
    return res.status(200).send(allLink);
};

module.exports = {
    htmlCode,
    proxyLink,
    proxyRedirect,
    allLinks,
};