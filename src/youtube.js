/*
----------------------------------------------------------------------
Copyright (c) 2017 Dave Daggett. All rights reserved.
Use of this source code is governed by permissible license that can be
found in the LICENSE file.
----------------------------------------------------------------------
purpose:
send current iFrame tag to background element with comment.

*/

function getYoutubeID() {
    var video_id = window.location.search.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
}

function execute() {

    console.log("executing");

    var text = '';

    // var videoID = getYoutubeID();
    // console.log(videoID);

    $(document).on("keydown",function(e) {
        if((e.which === 13)) { // Enter

            console.log("entered");

            // var socket = io.connect('http://localhost:1337');
            // socket.emit('newVext', {
            //     text: text,
            //     videoID: videoID
            // });
        }
    });
}

$( document ).ready(function() {
    $(document).on("keydown",function(e) {
        if((e.ctrlKey) && (e.which === 186)) { // Ctrl + ;
            execute();
        }
    });
});
