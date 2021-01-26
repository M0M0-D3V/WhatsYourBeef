// import mongoose
const mongoose = require("mongoose");

// export config to be used in server
module.exports = (db_name) => {
    mongoose.connect(`mongodb://localhost/${db_name}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log(`Established a connection ${db_name}`))
    .catch((err) => console.log("mongoose connection failed: ", err));
}