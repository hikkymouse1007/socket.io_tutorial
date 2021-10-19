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

  socket.on('chat message', (data, dummy = null, callback) => {
    console.log('name: ' + data.name + ' message:' + data.message);
    callback({
      status: "ok"
    });

    io.emit('chat message', data);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});