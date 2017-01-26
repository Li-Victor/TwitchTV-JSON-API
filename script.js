$(document).ready(function() {

    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?', function(data) {
        console.log(data);
    });
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/FreeCodeCamp?callback=?', function(data) {
        console.log(data);
    });
    
});
