const cakesController = require('../controllers/cakes');
const reviewsController = require('../controllers/reviews');
const ordersController = require('../controllers/orders');


module.exports = function (app) {
  app.get('/api/cakes', cakesController.all);
  app.post('/api/cakes', cakesController.create);
  app.get('/api/cakes/:id', cakesController.getOne);

  app.post('/api/reviews/:cakeId', reviewsController.create);

  app.post('/api/orders/:cakeId',ordersController.create);
}
