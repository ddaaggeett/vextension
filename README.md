# VexTension

send some server (localhost:1234) a youtube id while watching youtube. uses `[socket.io](https://socket.io/docs/client-api/)`

trigger by pressing `Ctrl + ;` (that's `+ semicolon`)

## to use

    git clone git@github.com:ddaaggeett/vextension.git
    cd vextension/

### developer mode

    npm start

### production mode

    npm run build

then, upload to yout extensions:
- go to `chrome://extensions`
- check `developer mode`
- click `load unpacked extension`
- select the folder containing `manifest.json`
