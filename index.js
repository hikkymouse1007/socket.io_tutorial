const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (name, message, callback) => {
    console.log(`name: ${name} message: ${message}`);
    io.emit('chat message', (name, message));
    callback({
      status: "okkkkk"
    });
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});