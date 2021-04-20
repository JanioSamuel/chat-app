const queueActions = require('../util/QueueActions');

const StockController = require('../controllers/StockController');

queueActions.consume('stock.service', message => {
  const content = JSON.parse(message.content);

  StockController.index(content.stock);
});