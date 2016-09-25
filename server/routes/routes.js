//routes.js
var entry = require('../entries/entries.js');
var folder = require('../folders/folders.js');
var authentication = require('../authentication/authentication.js');


module.exports = (app, express) => {

  //Folders
  app.post('/api/addFolder/::parentId', authentication.isAuthenticated, folder.addFolder);
  app.post('/api/removeFolder/::folderId', authentication.isAuthenticated, folder.removeFolder);
  app.post('/api/moveFolder/::folderId/::newParentFolderId', authentication.isAuthenticated, folder.moveFolder);
  app.post('/api/modifyFolder/::folderId', authentication.isAuthenticated, folder.modifyFolder);
  app.get('/api/getSubFolders/::folderId', authentication.isAuthenticated, folder.getSubFolders);
  app.get('/api/getFolderAncestry/::folderId', authentication.isAuthenticated, folder.getFolderAncestry);  

  //Entries
  app.get('/api/getFolderItems/::folderId', authentication.isAuthenticated, entry.getFolderItemsWeb);
  app.post('/api/addEntry/::folderId/::parentId', authentication.isAuthenticated, entry.addEntryWeb);
  app.post('/api/deleteEntry/::entryId', authentication.isAuthenticated, entry.deleteEntryWeb);
  app.post('/api/modifyEntry/::entryId', authentication.isAuthenticated, entry.modifyEntryWeb);

};