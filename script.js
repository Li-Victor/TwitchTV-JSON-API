'use strict';

$(document).ready(function() {

    var streamArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

    for (var stream in streamArray) {
        var stream = 'https://wind-bow.glitch.me/twitch-api/streams/' + streamArray[stream] + '?callback?';

        $.getJSON(stream, function(data) {

            if(data.stream) {
                $('.container').append(
                    '<div class="row">' +
                        '<div class="col-sm-3">' +
                            '<img src="' + data.stream.channel.logo + '" alt="" class="img-thumbnail">' +
                        '</div>' +

                        '<div class="col-sm-9">' +
                            'Online | <a href="' + data.stream.channel.url + '" target="_blank">' + data.stream.channel.name + '</a> | ' + data.stream.channel.game + ':' + data.stream.channel.status +
                        '</div>' +

                    '</div>'
                );
            } else {

                var channel = data._links.channel;
                channel = channel.slice(channel.lastIndexOf('/'));

                $.getJSON('https://wind-bow.glitch.me/twitch-api/channels' + channel + '?callback?', function(data) {

                    //Placeholder user image
                    if(!data.logo) data.logo = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

                    if(data.error) {

                        $('.container').append(
                            '<div class="row">' +
                                '<div class="col-sm-3">' +
                                    '<img src="' + data.logo + '" alt="" class="img-thumbnail">' +
                                '</div>' +

                                '<div class="col-sm-9">' +
                                    data.message +
                                '</div>' +

                            '</div>'
                        );

                    } else {

                        $('.container').append(
                            '<div class="row">' +
                                '<div class="col-sm-3">' +
                                    '<img src="' + data.logo + '" alt="" class="img-thumbnail">' +
                                '</div>' +

                                '<div class="col-sm-9">' +
                                    'Offline | <a href="' + data.url + '" target="_blank">' + data.display_name + '</a>' +
                                '</div>' +

                            '</div>'
                        );

                    }

                });
            }

        });

    }

});
