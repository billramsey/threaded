//routes.js
var entry = require('../entries/entries.js');
var folder = require('../folders/folders.js');
var authentication = require('../authentication/authentication.js');


module.exports = (app, express) => {

  //Folders
  app.post('/api/addFolder/::parentId', authentication.isAuthenticated, folder.addFolderWeb);
  app.post('/api/removeFolder/::folderId', authentication.isAuthenticated, folder.removeFolderWeb);
  app.post('/api/moveFolder/::folderId/::newParentFolderId', authentication.isAuthenticated, folder.moveFolderWeb);
  app.post('/api/modifyFolder/::folderId', authentication.isAuthenticated, folder.modifyFolderWeb);
  app.get('/api/getSubFolders/::folderId', authentication.isAuthenticated, folder.getSubFoldersWeb);
  app.get('/api/getFolderAncestry/::folderId', authentication.isAuthenticated, folder.getFolderAncestryWeb);  
  app.get('/api/getFolderItems/::folderId', authentication.isAuthenticated, folder.getFolderItemsWeb);

  app.get('/api/test', function(req, res, next) {
    console.log('hi');
    res.json({test: 'works'});
  });

  //Entries
  app.post('/api/addEntry/::folderId/::parentId', authentication.isAuthenticated, entry.addEntryWeb);
  app.post('/api/deleteEntry/::entryId', authentication.isAuthenticated, entry.deleteEntryWeb);
  app.post('/api/modifyEntry/::entryId', authentication.isAuthenticated, entry.modifyEntryWeb);

};