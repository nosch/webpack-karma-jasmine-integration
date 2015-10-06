var $ = require('jquery');
var dispatcher = require('../../services/dispatcher');
var eventType = 'loadUserData';

$.ajax({
    url: './data/user.json'
}).done(function (user) {
    dispatcher.emit(eventType, {user: user});
});
