const crypto = require("crypto");

const idCr = () => {
    return crypto.randomBytes(16).toString("hex");
};

module.exports = { idCr };