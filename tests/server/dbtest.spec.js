//dbtest.js
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = require('chai').should();
chai.use(chaiAsPromised);


var entryUtils = require('../../server/entries/entries.js');
var folderUtils = require('../../server/folders/folders.js');

var Folder = require('../../server/database/Folder.js');
var Entry = require('../../server/database/Entry.js');
var User = require('../../server/database/User.js');

var messages = require('../../server/messages/messages.js');

 
describe('Database Tests', function() {
  var testFolderId, testEntryId, testUserId;

  before(function(done) {
    User.create({
      userId: '1', 
      username: 'bill',
      firstName: 'bill',
      lastName: 'ramsey'
    })
    .then((createdUser)=> {
      testUserId = createdUser.userId;
      return Folder.create({
        title: 'testfoldertitle', 
        description: 'testfolderdescription', 
        creator: testUserId, 
        modifier: testUserId
      });
    })
    .then((createdFolder) => {
      testFolderId = createdFolder.folderId;
      return Entry.create({
        title: 'testentrytitle', description: 'testentrydescription', 
        creator: testUserId, 
        modifier: testUserId,
        parentFolder: testFolderId
      });
    })
    .then((createdEntry) => {
      testEntryId = createdEntry.entryId;
      done();
    })
    .catch(done);

  });

  describe('Entry Tests', function() {
    it('should save without error', function(done) {
      entryUtils.addEntry('title', 'description', testUserId, testFolderId)
      .then((ent) => ent.destroy())
      .then(()=> done())
      .catch(done);
    });
    it('should store entry fields', function(done) {
      entryUtils.addEntry('title', 'description', testUserId, testFolderId)
      .then((ent) => {
        ent.title.should.equal('title');
        ent.description.should.equal('description');
        ent.creator.should.equal(testUserId);
        ent.modifier.should.equal(testUserId);
        ent.parentFolder.should.equal(testFolderId);
        ent.destroy();
      })
      .then(()=> done())
      .catch(done);
    });
    it('should expect a user id', function(done) {
      entryUtils.addEntry('title', 'description', '', testFolderId)
      .should.be.rejectedWith(messages.noUserId).and.notify(done);
    });
  });

  describe('Folder Tests', function() {
    it('should save without error', function(done) {
      folderUtils.addFolder('title', 'description', testUserId, testFolderId)
      .then((ent) => ent.destroy())
      .then(()=> done())
      .catch(done);
    });
    it('should store fields', function(done) {
      folderUtils.addFolder('title', 'description', testUserId, testFolderId)
      .then((fol) => {
        fol.title.should.equal('title');
        fol.description.should.equal('description');
        fol.creator.should.equal(testUserId);
        fol.modifier.should.equal(testUserId);
        fol.parentFolder.should.equal(testFolderId);
        fol.destroy();
      })
      .then(()=> done())
      .catch(done);
    });

    it('should get children folders', function(done) {
      var parentId;
      folderUtils.addFolder('title', 'description', testUserId, testFolderId)
      .then((fol) => {
        parentId = fol.folderId;
      })
      .then(() => folderUtils.addFolder('title', 'description', testUserId, parentId))
      .then(() => folderUtils.addFolder('title', 'description', testUserId, parentId))
      .then(() => folderUtils.getSubFolders(parentId))
      .then((children) => {
        children.length.should.equal(2);
      })
      .then(()=> done())
      .catch(done);
    });
  });

  after(function(done) {
    User.destroy({
      where: {
        userId: testUserId,
      }
    })
    .then(() => {
      return Entry.destroy({
        where: {
          entryId: testEntryId,
        }
      });
    })
    .then(() => {
      return Folder.destroy({
        where: {
          folderId: testFolderId,
        }
      });
    })
    .then(() => done())
    .catch(done);
  });

});
