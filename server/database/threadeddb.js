//dbconfig.js
var sequelize = require('../config/db.config');

//Intermediary stuff.

var Entry = require('./Entry.js');
var Folder = require('./Folder.js');
var User = require('./User.js');


// User.sync()
// .then(() => Folder.sync())
// .then(() => Entry.sync());


sequelize.sync({force: true});

module.exports = sequelize;