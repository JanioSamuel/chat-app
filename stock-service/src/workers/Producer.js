const queueActions = require('../util/QueueActions');

function sendToQueue(queue, message) {
  queueActions.sendToQueue(queue, message);
}

module.exports = {
  sendToQueue
}