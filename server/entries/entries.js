// entries.js

var Entry = require('../database/Entry.js');
console.log('e',Entry);
module.exports.getFolderItemsWeb = function(req, res, next) {

};
//Add Entry
module.exports.addEntryWeb = function(req, res, next) {
  var entry = {};
  entry.title = req.title;
  entry.description = req.description;
  entry.user = req.userId;
  entry.folderId = req.folderId;

  addEntry(req.title, req.description, req.userId, req.folderId)
  .then((addedEntry) => res.json(addedEntry))
  .catch((err) => res.json(err));


};


module.exports.deleteEntryWeb = function(req, res, next) {

};
module.exports.modifyEntryWeb = function(req, res, next) {

};



module.exports.getFolderItems = function(req, res, next) {

};
//Add Entry
module.exports.addEntry = function(title, description, userId, folderId) {
  return new Promise((resolve, reject) => {

    var e = Entry.create({title: title, description: description, userId: userId, folderId: folderId})
    .then((created) => resolve(created))
    .catch(reject);

  });
};


module.exports.deleteEntry = function(req, res, next) {

};
module.exports.modifyEntry = function(req, res, next) {

};
