/*
----------------------------------------------------------------------
Copyright (c) 2017 Dave Daggett. All rights reserved.
Use of this source code is governed by permissible license that can be
found in the LICENSE file.
----------------------------------------------------------------------

purpose:
send youtube id to VexT server - http://localhost:1234
*/

console.log('\nbackground running\n')

var io = require('socket.io-client');

var server = io('http://127.0.0.1:1234');

// on chrome hearing call from content script (youtube.js)
chrome.runtime.onMessage.addListener(
    function(request,sender,senderResponse){
        console.log(request.videoID);

        // socket.io trigger to server
        server.emit('newVext',{
            videoID: request.videoID
        });
    }
);
