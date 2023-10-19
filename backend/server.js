const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./routes');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support urlencoded

app.use(cors());


app.use("/api", router)

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use("/uploads", express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    } catch (e) {
        console.log(e);
    }
})

// app.get("/", (req, res) => {
//     res.send("Welcome")
// })

app.listen(process.env.PORT || 8080, () => {
    console.log("listening on port 8080");
})