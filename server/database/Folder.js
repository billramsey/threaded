//Folder.js
var User = require('./User.js');
var Sequelize = require('Sequelize');
var sequelize = require('../config/db.config');

var Folder = sequelize.define('folders', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  folderCount: {
    type: Sequelize.INTEGER,
  },
  ACL: {
    type: Sequelize.STRING,
  },
  folderId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

Folder.belongsTo(User, { foreignKey: 'creator'});
Folder.belongsTo(User, { foreignKey: 'modifier'});

module.exports = Folder;