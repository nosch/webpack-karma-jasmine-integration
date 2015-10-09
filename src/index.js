require('babel-core/polyfill');

var $ = require('jquery');
var ok = require('./modules/one');
var notOk = require('./modules/two');
var john = require('./modules/three');

$(function() {
    console.log($('#main-heading'));
});


// Async test
require('./modules/user');
var dispatcher = require('./services/dispatcher');

dispatcher.onLoadUserData(function (payload) {
    console.log(payload);
});


