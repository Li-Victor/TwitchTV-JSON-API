$(document).ready(function() {

    streamArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    for (var stream in streamArray) {
        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamArray[stream] + '?callback?', function(data) {
            if(data.stream) {
                $('.container').append(
                    '<div class="row">' +
                        '<div class="col-sm-3">' +
                            '<img src="' + data.stream.channel.logo + '" alt="" class="img-circle">' +
                        '</div>' +

                        '<div class="col-sm-9">' +
                            '<h4 class="stream_status">' +
                                'Online | <a href="' + data.stream.channel.url + '" target="_blank">' + data.stream.channel.name + '</a> | ' + data.stream.channel.game + ':' + data.stream.channel.status +
                            '</h4>' +
                        '</div>' +

                    '</div>'
                );
            } else {

                var channel = data._links.channel;
                channel = channel.slice(channel.lastIndexOf('/'));

                $.getJSON('https://wind-bow.gomix.me/twitch-api/channels' + channel + '?callback?', function(data) {
                    $('.container').append(
                        '<div class="row">' +
                            '<div class="col-sm-3">' +
                                '<img src="' + data.logo + '" alt="" class="img-circle">' +
                            '</div>' +

                            '<div class="col-sm-9">' +
                                '<h4 class="stream_status">' +
                                    'Offline | <a href="' + data.url + '" target="_blank">' + data.display_name + '</a>' +
                                '</h4>' +
                            '</div>' +

                        '</div>'
                    );
                });
            }

        });


    }

});
