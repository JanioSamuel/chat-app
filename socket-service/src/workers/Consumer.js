const queueActions = require('../util/QueueActions');

function consume(io) {
  queueActions.consume('socket.service', message => {
    const content = JSON.parse(message.content);

    if (content.Close === 'N/D') {
      io.emit('chat', 'Stock Bot', `Sorry, I couldn't find the stock ${content.Symbol}`)
    } else {
      io.emit('chat', 'Stock Bot', `${content.Symbol} quote is $${content.Close} per share`)
    }
  })
}
module.exports = {
  consume
}
