const queueActions = require('../util/QueueActions');

function sendToQueue(queue, stockName) {
  queueActions.sendToQueue(queue, { stock: stockName });
}

module.exports = {
  sendToQueue
}