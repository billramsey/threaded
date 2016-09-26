// folders.js
var Folder = require('../database/Folder.js');

module.exports.addFolderWeb = function(req, res, next) {

};
module.exports.removeFolderWeb = function(req, res, next) {

};
module.exports.moveFolderWeb = function(req, res, next) {

};
module.exports.modifyFolderWeb = function(req, res, next) {

};
module.exports.getSubFoldersWeb = function(req, res, next) {

};
module.exports.getFolderAncestryWeb = function(req, res, next) {

};
module.exports.getFolderItemsWeb = function(req, res, next) {

};



module.exports.getFolderItems = function(folderId) {

};
module.exports.addFolder = function(title, description, userId, folderId) {
  return new Promise((resolve, reject) => {

    Folder.create({
      title: title, 
      description: description, 
      creator: userId,
      modifier: userId, 
      parentFolder: folderId})
    .then((created) => resolve(created))
    .catch(reject);

  });
};
module.exports.removeFolder = function(folderId) {

};
module.exports.moveFolder = function(folderId, toParent) {

};
module.exports.modifyFolder = function(folderId) {

};
module.exports.getSubFolders = function(folderId) {
  return Folder.findAll({
    where: {
      parentFolder: folderId
    },
    raw: true
  });
};
module.exports.getFolderAncestry = function(folderId) {

};