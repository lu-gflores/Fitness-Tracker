const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

app.listen(PORT, () => {
    console.log("App running on port " + PORT);
});

