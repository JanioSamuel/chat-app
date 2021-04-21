const producer = require('../workers/Producer');
const clients = [];
const STOCK_NAME_REGEX = /(^\/stock=(.\S+))/i;
const MATCH_GROUP = [2];

function join(socket) {
  socket.on('join', function (name) {
    clients[socket.id] = name;
    socket.broadcast.emit('chat', 'Server', `${name} has joined the server.`)
  });
}

function send(socket, io) {
  socket.on('send', function (msg) {
    if (msg && msg.includes('/stock=')) {
      producer.sendToQueue('stock.service', msg.match(STOCK_NAME_REGEX)[MATCH_GROUP]);
    } else {
      io.emit('chat', clients[socket.id], msg);
    }
  });
}

function disconnect(socket, io) {
  socket.on('leave', function () {
    io.emit('chat', `${clients[socket.id]} has left the server.`);
    delete clients[socket.id];
  });
}

module.exports = {
  join,
  send,
  disconnect
}