const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.emit('welcome', 'Real-time data')
    
    setInterval(() => {
        const data = { timestamp: new Date().toISOString() };
        socket.emit('server-time', data);
    }, 2000);

    socket.on('say-hello', (name) => {
        if (name) {
            console.log(`User said hello: ${name}`);
            socket.emit('reply-to-hello', `Hello, ${name}!`)
        }
    })

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
