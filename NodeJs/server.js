console.log("--- Starting NodeJS server.js.....");
//----------------------------------------------
var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var viewPath = __dirname + '/views/';
var modelPath = __dirname + '/models/';
//-----------Start Listening to port 7001-------
app.use(express.static(path.join(__dirname, 'public')));
//app.use(router);
app.get('/', function(req, res) {
    console.log('/index.html');
    res.sendFile(viewPath + 'index.html');
});
app.get('/motor', function(req, res) {
    //res.sendFile(modelPath + 'inv_motor_parts.json');
    console.log('/motor');
    //Send gets cached in memory
    //Returns Same json even if file has changed. 
    //res.send(require(modelPath + 'inv_motor_parts.json'));

    //Does not cache value in memory
    //Does not require server restart if json file changes.
    res.sendFile(modelPath + 'inv_motor_parts.json');
});
app.use("*", function(req, res) {
    console.log("/ others");
    res.write("Error 404");
});
app.listen(7003, function() {
    console.log("Server started port 7003 " + process.env.POR + "...");
});