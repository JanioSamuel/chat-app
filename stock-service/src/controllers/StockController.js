const producer = require('../workers/Producer');
const api = require('../services/api');

async function index(stock) {
  const response = await api.get(`/q/l/?s=${stock}&f=sd2t2ohlcv&h&e=csv`);
  const arr = response.data.split('\r\n');
  const json = transformCSVtoJSON(arr);

  producer.sendToQueue('socket.service', json);
}

module.exports = {
  index
}

function transformCSVtoJSON(arr) {
  const filteredArray = arr.filter(el => el != '');
  const headers = filteredArray[0].split(',');
  const values = filteredArray[1].split(',');
  const json = new Object();
  for (let i = 0; i < headers.length; i++) {
    json[headers[i]] = values[i];
  }
  return json;
}
