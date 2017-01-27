$(document).ready(function() {

    // streamArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?', function(data) {
        $('.container').append(
            '<div class="row">' +
                '<img src="' + data.stream.channel.logo + '" alt="" class="img-circle">' +
                '<h4 class="stream_status">' +
                    'Online | ' + data.stream.channel.name + ' | ' + data.stream.channel.game + ':' + data.stream.channel.status +
                '</h4>' +
            '</div>'
        )
        console.log(data.stream);
    });

});
