'use strict'
var express = require('express');
var app = express();
var webSocket = require('ws');

app.get("/", function (req, res) {
    res.status(503);
    res.send("Invalid route");
});

app.get("/team", function(req, res) {
    res.status(200).send("Team");
});

app.get("/scoreboard", function (req, res) {
    res.status(200).send("Scoreboard");
});

app.get("/master", function (req, res) {
    res.status(200).send("Master");
})

app.listen(1337);