var $ = require('jquery'); // not necessary, jQuery comes with jasmine-jquery
var john = require('./../../index');

describe('Testing jQuery', function() {
    it('element should be in the DOM', function () {
        jasmine.getFixtures().fixturesPath = 'base/src/modules/three/test/fixture';
        jasmine.getFixtures().load('three.fixture.html');

        expect($('.module-heading')).toBeInDOM();
    });

    it('name of jQuery founder should be John Resig', function () {
        var type = $.type(john);

        expect(typeof john).toBe(type);
        expect(john.firstName).toBeDefined();
        expect(john.lastName).toBeDefined();
    });
});
