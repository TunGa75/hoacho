console.log ("server")
var express = require('express');//lenh khai bao (var) 
const nodemon = require('nodemon');
var app = express();
app.listen(3000, function () {
    console.log("Starting at port 3000...");
});