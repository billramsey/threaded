//dbtest.js
var entryUtils = require('../../server/entries/entries.js');

describe('Entry Creation', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      
      entryUtils.addEntry('title', 'description', '1', '1')
      .then(()=> done())
      .catch(done);

    });
  });
});
