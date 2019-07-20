const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(__dirname + '/client'));
server.listen(3000, serverStart);

function serverStart() {
    console.log("Listening on port 3000!");
}