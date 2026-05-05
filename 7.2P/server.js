const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A user connected');

  // When server receives a message from client, broadcast to everyone
  socket.on('chat message', (msg) => {
    console.log('Message: ' + msg);
    io.emit('chat message', msg); // send to ALL connected clients
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});