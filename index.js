"use strict"

let express = require('express');
let directory = require("serve-index");
// let cors = require('cors');
let http = require('http');
let bodyParser = require('body-parser');

let spawn = require('child_process').spawn;
let uuid = require('uuid/v1');

let port = 8888;
let address = "127.0.0.1";
let staticRootDir = './static';
let staticRoot = '/static';


this.app = express();
this.server = http.createServer(this.app);

this.app.use(bodyParser.json({ limit: '50mb' }));

this.app.use(staticRoot, express.static(staticRootDir));

this.app.use(staticRoot, directory(staticRootDir, {
    "icon": true,
    "hidden": true
}));

this.app.post('/tts', function(req, res){
    console.log("/tts post", req.body);
    let wavUrl = '/static/wav/' + uuid() + ".wav";
    let wavName = '.' + wavUrl;
    let tts_proc = spawn("./tools/ifly_tts_c/bin/tts_sample",
        [req.body.text, wavName]);

    tts_proc.stdout.on('data', (data) => {
        // console.log("stdout: ", data);
        console.log(`stdout: ${data}`);
    });

    tts_proc.stderr.on('data', (data) => {
        // console.log("stderr: ", data);
        console.log(`stderr: ${data}`);
    });

    tts_proc.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        res.send({'audioUrl': wavUrl});
    });

});

this.server.on('close', () => {
    console.log("server closed");
});

this.server.on('connection', () => {
    console.log("server connected");
});

this.server.listen(port, address, err => {
    if(err) {
        console.log("Error on listenling on ", port, address);
    }

    console.log("Listening on ", port, address);

});

