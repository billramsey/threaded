// server.js


var express = require('express');
var app = express();

// Routing
require('./routes/routes.js')(app, express);


var db = require('./database/threadeddb.js');




app.listen(3001, function () {
  console.log('Server Started on port 3001');
});
