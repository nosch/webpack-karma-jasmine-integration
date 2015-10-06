var $ = require('jquery');
var ok = require('./modules/one');
var notOk = require('./modules/two');
var john = require('./modules/three');

$(function() {
    console.log($('#main-heading'));
});


// Async test
require('./modules/user');
var eventType = 'loadUserData';
var dispatcher = require('./services/dispatcher');

dispatcher.on(eventType, function (event) {
    console.log(event);
});


