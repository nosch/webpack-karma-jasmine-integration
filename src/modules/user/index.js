var $ = require('jquery');
var dispatcher = require('./../../services/dispatcher');

$.ajax({
    url: './../data/user.json'
}).done(function (user) {
    dispatcher.loadUserData(user);
});
