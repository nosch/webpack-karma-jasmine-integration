var module = require('./index');

describe('Testing module TWO', function() {
    it('should run a test', function() {
        var notOk = 0;
    });

    it('should require a file', function() {
        if (module.notOk === true) {
            throw new Error('module TWO didn\'t export ok');
        }
    })
});
