'use strict'
var express = require('express');
var mongoose = require('mongoose');

var app = express();
mongoose.connect("mongodb://localhost:27017");

app.get("/", function (req, res) {
    res.status(501);
    res.send("Invalid route");
});

app.get("/api/:version/questions/:category", function(req, res) {
    res.status(200).send("Category");
});

app.get("/api/:version/categories", function (req, res) {
    res.status(200).send("Categories");
});

app.get("/api/:version/question/:id", function (req, res) {
    res.status(200).send("Question");
})

app.listen(1337);