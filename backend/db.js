const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/qAndA";

const conn = mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log(err);
});

module.exports = conn;