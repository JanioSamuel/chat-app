require('dotenv-safe').config();

function connect() {
  return require('amqplib').connect(process.env.AMQP_URL).then(conn => {
    console.log('Conected');
    return conn.createChannel()
  }).catch(err => {
    console.log('Reconnecting...');
    var promise = new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve(connect());
      }, 5000)
    })
    return promise;
  });
}

function createQueue(channel, queue) {
  return new Promise((resolve, reject) => {
    try {
      channel.assertQueue(queue, { durable: true });
      resolve(channel);
    }
    catch (err) { reject(err) }
  });
}

async function sendToQueue(queue, message) {
  await connect()
    .then(channel => createQueue(channel, queue))
    .then(channel => channel.sendToQueue(queue, Buffer.from(JSON.stringify(message))))
    .catch(err => console.log(err))
}

function consume(queue, callback) {
  connect()
    .then(channel => createQueue(channel, queue))
    .then(channel => channel.consume(queue, callback, { noAck: true }))
    .catch(err => console.log(err));
}

async function startQueue(queue) {
  await connect()
    .then(channel => createQueue(channel, queue));
}

module.exports = {
  sendToQueue,
  consume,
  startQueue
}