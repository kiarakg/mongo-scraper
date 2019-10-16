// Dependencies
var express = require("express");
var mongoose = require("mongoose");

// Initialize express
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the app to listen on PORT 3000
app.listen(3000, function() {
    console.log("App listening on PORT 3000!");
});