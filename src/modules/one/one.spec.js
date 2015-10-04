var module = require('./index');

describe('Testing module ONE', function() {
    it('should run a test', function() {
        var ok = 1;
    });

    it('should require a file', function() {
        if (!module.ok) {
            throw new Error('module ONE didn\'t export ok');
        }
    })
});
