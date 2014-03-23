/**
 * Module dependencies.
 */

var express = require('express');

// Path to our public directory

var pub = __dirname + '/public';

// setup middleware

var app = express();
app.use(express.static(pub));

// Optional since express defaults to CWD/views

app.set('views', __dirname + '/views');

app.set("view engine", "jade");

app.get('/', function(req, res){
    var data = {};
    res.render('index',data);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});