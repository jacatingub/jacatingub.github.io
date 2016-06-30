/*
 * AUTHOR: John Aspen P. Catingub
 * Date Created: June 17, 2015
*/

// Dependencies
var express = require('express');
var app = express();
const PORT = 8080;
const MAIN_DIR = '/home/aspen/Desktop/knightmarebaskerville/build/';

app.use('/static', express.static(MAIN_DIR + 'static'));

app.get('/', function (req, res) {
    res.sendFile(MAIN_DIR + 'index.html');
});

app.get('/home', function (req, res) {
    res.sendFile(MAIN_DIR + 'index.html');
});

app.listen(PORT, function() {
    console.log("App listening on port: ", PORT);
});