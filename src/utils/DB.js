const mongoose = require("mongoose");
const URI = process.env.URI;

module.exports = connectDB = async() => {
    await mongoose
        .connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log(`****** Connection established to Database ********`);
        })
        .catch((err) => {
            console.log(
                `\n****** Connection not established to Database ********\n\n`,
                err
            );
        });
};