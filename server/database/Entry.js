//Entry.js
var User = require('./User.js');
var Folder = require('./Folder.js');
var Sequelize = require('Sequelize');
var sequelize = require('../config/db.config');

var Entry = sequelize.define('entries', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  commentCount: {
    type: Sequelize.INTEGER,
  },
  ACL: {
    type: Sequelize.STRING,
  },
  entryId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

Entry.belongsTo(User, { foreignKey: 'creator'});
Entry.belongsTo(User, { foreignKey: 'modifier'});

Entry.belongsTo(Folder, { foreignKey: 'parentFolder'});

module.exports = Entry;
