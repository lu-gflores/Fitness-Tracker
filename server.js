const express = require("express");
const morgan = require("morgan");
const mongojs = require("mongojs");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.listen(PORT, () => {
    console.log("App running on port " + PORT);
})