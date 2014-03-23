var express = require('express');
var app = express();


var pub = __dirname + '/public';

// setup middleware

var app = express();
app.use(express.static(pub));

// Optional since express defaults to CWD/views

app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});