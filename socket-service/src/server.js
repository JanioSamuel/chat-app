const express = require('express');
const cors = require('cors');
const app = express();
const socketIO = require("socket.io");
const consumer = require('./workers/Consumer');
const SocketController = require('./controllers/SocketController');

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3002);

const io = socketIO(server);

io.on('connect', function (socket) {
  SocketController.join(socket);

  SocketController.send(socket, io);

  SocketController.disconnect(socket, io);

  consumer.consume(io);
})