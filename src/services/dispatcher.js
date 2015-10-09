var EventEmitter = require('events');
var emitter = new EventEmitter();
var eventTypes = require('./constants').eventTypes;

function Dispatcher() {}

Dispatcher.prototype.onLoadUserData = function (callback) {
    emitter.on(eventTypes.LOAD_USER_DATA, function (payload) {
        callback(payload);
    });
};

Dispatcher.prototype.loadUserData = function (data) {
    emitter.emit(eventTypes.LOAD_USER_DATA,{payload: data});
};

module.exports = new Dispatcher();
