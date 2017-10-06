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
    var cut = video_id.indexOf('&');
    if(cut != -1) {
        video_id = video_id.substring(0, cut);
    }
    return video_id;
}

function execute() {

    console.log("new vext");

    // send youtube video id to background.js
    var videoID = getYoutubeID();
    chrome.runtime.sendMessage({
        videoID: videoID
    },function(response){});

    window.location.replace("http://localhost:3000"); // open vext node.js app using Youtube <iFrame> API
}

$( document ).ready(function() {
    $(document).on("keydown",function(e) {
        if((e.ctrlKey) && (e.which === 186)) { // Ctrl + ;
            execute();
        }
    });
});
