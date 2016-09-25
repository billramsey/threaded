// server.js


var express = require('express');
var app = express();

// Routing
require('./routes/routes.js')(app, express);


var db = require('./database/threadeddb.js');


app.listen(8080, function () {
  console.log('Server Started');
});
