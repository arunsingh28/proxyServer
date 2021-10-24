const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("link", siteSchema);