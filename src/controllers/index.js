const needle = require("needle");

const fetch = async(req, res) => {
    const site = req.query;
    needle.get(`https://${site.s}`, (err, response) => {
        if (!err && response.statusCode === 200) {
            return res.status(200).json({ body: response.body });
        } else {
            console.log("not working");
        }
    });
};

module.exports = {
    fetch,
};